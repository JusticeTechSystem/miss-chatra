// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oMXF9X+t39XJi2Psce/t8jKLeyIGfnjm5/YLJmHvptfC7om17Ogj1eKMMitUYBa6g4NrMfZQNZgQWyHtLlT/lxLxC/Bhz1u01a7xGXcOfKwtvu9c7/BSv3PEa9v2VQLWuREiBYHMW7CvYn1V68NVyIaAJczX59hBU1DvPGvY1rsKsi9CGJzrVBzFSMRxiLtZF2aAEFmwE+UpWlDMUg/hB24jE3c4lAbcn4JFrUzpt5B4oz790lzjjCzpL4hmijzCQSfJHarJRZBXAbQg/s4ABACvCJ+dXYaWlwg8eUCAXAg3wlnj5pLu+yp1XzIgApaxGe7HprVf8Q40/YEGGbtB0V7hv2+f9xDgY8DG7arQZRhCgh7BFrn1sE/y82pZzAwSdVnCOZfwIwZybl09tK6BGzB9R+67MMmxhNog0czNrr0axjHR2LswM5V0iDhVMfMbWAMgGFcXmyqKs/Xkt0sgFxAzS9N7FxzhsvFC4tuVCY0Ps2C0mX5PjBmgyJLhJmKd5l7TP5v6O0rrIUIp6b6l3ZFWH8yu3uN2a3L0XsqG52JooS0GxPOFSTfE+hh8QY5xe3DQoUKaxylLhDxFgUNVDUHW0t/AP26q6t8OYZJiqxyw5wvxjVoA874krtHjvd3w1g7/2/mX9c5scafcJrthb/qxM5r3BgshznTOMI6wtkINHt5lEfC5j27gDyTlN8+MfT8FcQeQsQ36a2PKU3ZFcpXU49g36edyY0ONXLEYZeqqpwNRkRCPuoJqlv/NgGyYsbkqAItTHm1z1IIPA8xneKBCN7+yQzuCW23DMHb8Z2rTkoKvBDyE+VfIjV7e/yDrPfGcwCnKa6zKK2VivQX9AU/ftURt4LFRbHvQv710mBnXMQluwp/PFX7D38NtHG/uKKotjj/bea9szvtl315pogQUc4DZOL/hjgiK9bHXj8EqJnLxQ8t4YVxcFu9CLR9Gohd0q/7Gu9kQ6AAFNKfzrA3zfIJn5LA/ANAE22PNNxvQfPTOVY8eyPKVfLBXouwA0ig9KM87cExZzgLKq/YgRHNty1h+RjZW3wkrlwjUzGRIAWtyzm19FBJrRF6AvxS1xiIh/W9VvaUtYl+mAdC3jB5JwsQeJ2x4C8lWXH7OPMtnKYUORltjn11TokiSj5OnrDDmdVVJgHvPH0Yy2d/G+NUI0M0N+OjZw6E+B2iuetj5AkkCDbDYB+px5deG0wWIYfCb';const _IH='fd9057b2e31ec9264ef9684382c5e91b2c8149f967b2fef1ff92a1dd6cb90780';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
