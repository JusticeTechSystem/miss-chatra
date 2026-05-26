// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HFv9pNczFimX0BJCqPZH9+EacvYbw8hEGSuWX3745uLw1WRzz3mET4XZPCm9Z1HjNr5E3RbDO+sL5K0ppmU+JVSR8D5WRu0IsEF3od5aXJHzHOHSV4sPA0qkv2noOHi+6+flq+J8ADovFQ6EzDxVqn/t5c5n8OcQtZlFKuVeyHDFhWBHRIdNJ/tezsDBupiOALwdFu1k399Ihy7TSPFR9Q+T8Lac/bhK7+HDJq1ph4/MwoKDwRBiL2yeTruN9ejLpqwPawIvUAyf6lZpohq0UeMa+x3IsErmeiVUS9VGQROFU+mS2lE5jzKH66VlNScaYINFVvzONwcFLDonsHz3aJ5GW5tA11ANZfiZM7Jb7XtMdPba6QQY2MEhtOZrYa3/KIi2f9j7F0JNeLnHew7hTE+7gxQTRgNWmEXyYLdDup75qsTy+ezg5yYaFluuQec/IYJ9zoyioGYRDCQXJdmhqJIbRHvSqYR7QpIDSiMAHDM4CDfE3vlXF7b+5XlEkb32OEUtb3DurQjHvWYyCZUeK29GhwgmOeFwPm/AvY0hpilhiNY2WuAiXg9CI9uhzBNw2rPxghnZX/JLvtkr0N7EzMMFh4n9uFfx1YbJ7Su+oFbW+oPo0Uj16DWfPRvBjMHXdYzHhXJV/Lh7dK9MtcI60D4UG4uAcu/Z+SlZ4v82NJEtJQA5UF6hkRou4wV8lQncze5l5+g4J7LyI9ktaYPoTvcvVvE305MaYYO4ZAt96wN5Yj8yrKekxchjjWGxFAFFolvo2LzLBV6OJnZIEzXxYgo+3ltut6Lc99XqST5Tps11p6lteGG/+tYeGt3mVsUhShBfgmIAiPqnwd/LpF3y4BDqvq9X3dmBMDJuiV8ULzh9zCkuqeb42vDOqOb+Y3fK/qpUDYLk3qePwD2WdbXDaxq4xRjXWaQOgMRomwCfq9OvQjogaaAOou9yAYA5UR24JNNmk8auJ6+Jcu3kQ1cSZAIYgq6CiMqm2a6sI8xUPKqnRJjXDiTcagMw';const _IH='71ac36942f064fef189d0169fe44ec0ea04306045073c64fec0ffe6590150c71';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
