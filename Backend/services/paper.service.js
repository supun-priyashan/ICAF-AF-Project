const Paper = require('../models/paper.model');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.pdf' || ext !== '.doc' || ext !== '.docx' || ext !== '.pptx') {
            return cb(response.status(400).end('only document file formats are allowed'), false);
        }
        cb(null, true)
    }
})

const upload = multer({ storage: storage }).single("file")

const addPaper = async (request, response) => {
    const paper = new Paper(request.body);

    await paper.save().
    then((data) => {
        response.status(200).send({
            Paper: data,
            success: true
        }).
        catch((err) => {
            response.status(500).send({error: err.message});
        });
    }).catch((err) => {
        response.status(500).send({error: err});
    })
}

const getPapers = async (request, response) => {
    try {
        const papers = await returnAllPapersWithAuthors();
        response.status(200).json({ papers: papers });
    } catch (error) {
        response.status(404).json({ error: error.message });
    }
};

const returnAllPapersWithAuthors = () => {
    return Paper.find().populate('author');
}

const returnAllPapers = () => {
    return Paper.find();
}

const uploadFile = async(request, response) => {
    upload(request, response, err => {
        if (err) {
            return response.json({success: false, err})
        }
        return response.json({success: true, fileName: response.req.file.filename})
    })
}

const editPaper = async(request, response) => {
    Paper.findByIdAndUpdate(request.params.id, {
        $set: request.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return response.json({ success: false, error })
        } else {
            response.json(data)
            console.log('Paper updated successfully !')
        }
    })
}

const approvePaper = async(request, response) => {
    if(request.body.approve){
        console.log("id",request.body.id)
        Paper.findByIdAndUpdate(request.body.id, {
            isApproved: true
        }, (error, data) => {
            if (error) {
                console.log(error)
                return response.json({ success: false, error })
            } else {
                response.json({success: true})
                console.log('Workshop updated successfully !')
            }
        })
    }else{
        Paper.findByIdAndDelete(request.body.id, function (err, docs) {
            if (err){
                return response.json({ success:false,error: err})
            }
            else{
                return response.json({ success:true})
            }
        });
    }
}

module.exports = {
    addPaper,
    getPapers,
    uploadFile,
    editPaper,
    approvePaper,
    returnAllPapers
};
