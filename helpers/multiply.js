const fs = require('fs');
const colors = require('colors');

// ===================== USING ASYNC / AWAIT ===================== 
const createFile = async ( base, print, to) => {
    
    try {
        let output, cls = '';
        
        for(let i = 1; i <= to; i++) {
            cls += `${base} ${'x'.green} ${i} = ${base * i}\n`;
            output += `${base} x ${i} = ${base * i}\n`;
        }

        if ( print ) {
            console.log('================================='.rainbow);
            console.log(`     Multiplication Table: ${base}`  );                    
            console.log('================================='.rainbow);
            console.log(cls);
        }
        
    fs.writeFileSync(`./output/table-${base}.txt`, output);

    return `table-${base}.txt created`;

    } catch (err) {
        throw err;
    }
        
}

module.exports = {
    createFile
}
