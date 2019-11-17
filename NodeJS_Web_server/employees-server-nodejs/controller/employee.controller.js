require('dotenv').config();

var port = process.env.PORT


var Employee = require('../model/employee.model');

module.exports.index = async function (req, res) {
    var employees = await Employee.find();
    res.json(employees);
}

// insert data in mongoosedb
module.exports.create = async function (req, res) {

    var resClient = res;
    var employeeData = new Employee({
        eplCode: req.body.eplCode,
        fullName: req.body.fullName,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        gender: req.body.gender,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        salary: req.body.salary,
        image: "NOIMAGE",
        position: req.body.position
    });

    // Kiểm tra mã và email nhân viên đẫ tồn tại hay chưa
    async function query() {
        try {
            var queryCodeE = { eplCode: req.body.eplCode };
            var queryEmailE = { email: req.body.email };

            var checkCodeE = await Employee.findOne(queryCodeE);
            var checkEmailE = await Employee.findOne(queryEmailE);

            // Kiểm tra mã nhân viên
            if (checkCodeE) {
                resClient.send({
                    'result_code': 201,
                    'message': 'Code employee was exist!'
                });
                console.log("CHECKCODE");
                return;
            }

            // Kiểm tra email nhân viên
            if (checkEmailE) {
                resClient.send({
                    'result_code': 201,
                    'message': 'Email was exist!'
                });
                console.log("CHECKEMAIL");
                return;
            }

            // Nếu không chưa có mã nhân viên và email nào được tạo thì tạo mới nhân viên
            if (!checkCodeE && !checkEmailE) {
                await Employee.create(employeeData, function (err, res) {
                    if (err) {
                        res.send({
                            'result_code': 202,
                            'message': 'Opps!.Add employee failed. Please try again.'
                        });

                    }
                    resClient.send({
                        'result_code': 200,
                        'message': 'Add employee success!'
                    });
                });
                return;
            }
        }
        catch (error) {
            resClient.send({
                'result_code': 202,
                'message': 'Opps!.Add employee failed. Please try again.'
            });
        }
    }
    query();

};

module.exports.image = async function (req, res) {
    var eplCode = req.params.eplCode;

    // Kiểm tra nếu có hình ảnh được gửi lên
    if (req.files.length > 0) {
        var file = req.files[0];
        var imgUrls = { image: "http://localhost:" + port + "/uploads/" + file.filename };

        var newValues = { $set: imgUrls };

        await Employee.updateOne({ eplCode: eplCode }, newValues, function (err, res) {
            if (err) throw err;
            console.log("Update completed!");
            res.send({
                'result_code': 200,
                'message': 'Add employee success!'
            })
        });
    }
    else {
        res.send({
            'result_code': 203,
            'message': 'Opps!.You have not added images yet. Please try again.'
        })
    }

}

// Delete data in mongoosedb with id
module.exports.delete = async function (req, res) {
    var idEmployee = req.params.id;

    var employee = await Employee.deleteOne({ _id: idEmployee }, function (err, res) {
        if (err) throw err;
        console.log(obj);
    });

    res.json(employee);
}

// Update data in mongoodb with id
module.exports.update = async function (req, res) {
    var idEmployee = req.params.id;
    var newValues = { $set: req.body };

    var employee = await Employee.updateOne({ _id: idEmployee }, newValues, function (err, res) {
        if (err) throw err;
        console.log("Update completed!");
    });
    console.log(employee);
    res.json(employee);
}