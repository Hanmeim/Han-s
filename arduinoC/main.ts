enum pins{
//%
}
}
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace keypad4x4  {
    //% block="键盘的行数：[ROW] 列数：[COL] 设置键盘按键类型：第一行：[k11] [k12] [k13] [k14] \n第二行：[k21] [k22] [k23] [k24] \n第三行：[k31] [k32] [k33] [k34] \n第四行：[k41] [k42] [k43] [k44]"  blocktype="command"
    //% ROW.shadow="dropdown" ROW.options="NUM_Rowsncolumns"
    //% COL.shadow="dropdown" COL.options="NUM_Rowsncolumns"
    //% k11.shadow="string" k11.defl="1"
    //% k12.shadow="string" k12.defl="2"
    //% k13.shadow="string" k13.defl="3"
    //% k14.shadow="string" k14.defl="A"
    //% k21.shadow="string" k21.defl="4"
    //% k22.shadow="string" k22.defl="5"
    //% k23.shadow="string" k23.defl="6"
    //% k24.shadow="string" k24.defl="B"
    //% k31.shadow="string" k31.defl="7"
    //% k32.shadow="string" k32.defl="8"
    //% k33.shadow="string" k33.defl="9"
    //% k34.shadow="string" k34.defl="C"
    //% k41.shadow="string" k41.defl="*"
    //% k42.shadow="string" k42.defl="0"
    //% k43.shadow="string" k43.defl="#"
    //% k44.shadow="string" k44.defl="D"
     export function keypadinit(parameter: any, block: any) {
        let rows = parameter.ROW.code
        let cols = parameter.COL.code
        Generator.addInclude("keypadinit", "#include <Keypad.h>");
        Generator.addInclude("ROWS",`const byte ROWS = ${rows};`);
        Generator.addInclude("COLS",`const byte COLS = ${cols};`);
        if(rows=='3'){
        if(cols=='3'){
        let l1 = parameter.k11.code+parameter.k12.code+parameter.k13.code
        let l2 = parameter.k21.code+parameter.k22.code+parameter.k23.code
        let l3 = parameter.k31.code+parameter.k32.code+parameter.k33.code
        Generator.addInclude('keysmatrix', `char hexaKeys[ROWS][COLS] = {
                             \n {${l1}},
                             \n{${l2}},
                             \n{${l3}},
                             \n};`);
        }
        if(cols=='4'){
        let l1 = parameter.k11.code+parameter.k12.code+parameter.k13.code+parameter.k14.code
        let l2 = parameter.k21.code+parameter.k22.code+parameter.k23.code+parameter.k24.code
        let l3 = parameter.k31.code+parameter.k32.code+parameter.k33.code+parameter.k34.code
        Generator.addInclude('keysmatrix', `char hexaKeys[ROWS][COLS] = {
                             \n{${l1}},
                             \n{${l2}},
                             \n{${l3}},
                             \n};`);
        }
        }
        if(rows=='4'){
        if(cols=='3'){
        let l1 = parameter.k11.code+parameter.k12.code+parameter.k13.code
        let l2 = parameter.k21.code+parameter.k22.code+parameter.k23.code
        let l3 = parameter.k31.code+parameter.k32.code+parameter.k33.code
        let l4 = parameter.k41.code+parameter.k42.code+parameter.k43.code
        Generator.addInclude('keysmatrix', `char hexaKeys[ROWS][COLS] = {
                             \n{${l1}},
                             \n{${l2}},
                             \n{${l3}},
                             \n{${l4}}
                             \n};`);
        }
        if(cols=='4'){
        let l1 = parameter.k11.code+parameter.k12.code+parameter.k13.code+parameter.k14.code
        let l2 = parameter.k21.code+parameter.k22.code+parameter.k23.code+parameter.k24.code
        let l3 = parameter.k31.code+parameter.k32.code+parameter.k33.code+parameter.k34.code
        let l4 = parameter.k41.code+parameter.k42.code+parameter.k43.code+parameter.k44.code
        Generator.addInclude('keysmatrix', `char hexaKeys[ROWS][COLS] = {
                             \n{${l1}},
                             \n{${l2}},
                             \n{${l3}},
                             \n{${l4}}
                             \n};`);
        }
        }
    }

    //% block="键盘的行数：[ROW] 键盘的行对应的数字口：[r1] [r2] [r3] [r4]" blockType="command"
    //% ROW.shadow="dropdown" ROW.options="NUM_Rowsncolumns"
    //% r1.shadow="dropdown" r1.options="PIN_DigitalRead"
    //% r2.shadow="dropdown" r2.options="PIN_DigitalRead"
    //% r3.shadow="dropdown" r3.options="PIN_DigitalRead"
    //% r4.shadow="dropdown" r4.options="PIN_DigitalRead"
    export function rowsmatrix(parameter: any, block: any) {
        let rows = parameter.ROW.code
        let row1 = parameter.r1.code
        let row2 = parameter.r2.code
        let row3 = parameter.r3.code
        let row4 = parameter.r4.code
        if(rows=='3'){
        Generator.addInclude('rows', `byte rowPins[ROWS] = {${row1},${row2},${row3}};`);
        }
        if(rows=='4'){
        Generator.addInclude('rows', `byte rowPins[ROWS] = {${row1},${row2},${row3},${row4}};`);
        }
    }

    //% block="键盘的列数：[COL] 键盘的列对应的数字口：[c1] [c2] [c3] [c4]" blockType="command"
    //% COL.shadow="dropdown" COL.options="NUM_Rowsncolumns"
    //% c1.shadow="dropdown" c1.options="PIN_DigitalRead"
    //% c2.shadow="dropdown" c2.options="PIN_DigitalRead"
    //% c3.shadow="dropdown" c3.options="PIN_DigitalRead"
    //% c4.shadow="dropdown" c4.options="PIN_DigitalRead"
    export function columnsmatrix(parameter: any, block: any) {
        let columns = parameter.COL.code
        let col1 = parameter.c1.code
        let col2 = parameter.c2.code
        let col3 = parameter.c3.code
        let col4 = parameter.c4.code
        if(columns=='3'){
        Generator.addInclude('cols', `byte colPins[COLS] = {${col1},${col2},${col3}};`);
        }
        if(columns=='4'){
        Generator.addInclude('cols', `byte colPins[COLS] = {${col1},${col2},${col3},${col4}};`);
        }
    }

    //% block="读取按下的键值" blockType="reporter"
    export function KeypadRead(parameter: any, block: any) {
        Generator.addObject(`mykeypad`, `Keypad customKeypad`, `= Keypad(makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS);`);
        Generator.addCode(`customKeypad.getKey()`)
    }


}
