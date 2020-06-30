const { Router } = require('express');
const router = Router();

router.get('/', (req, res) =>{
    res.status(200).json({
        success: true,
        message: "Bienvenido",
    }); 
});

module.exports = router;