// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDOXyy2R2YXWL2g61pcfhGMI8Bj/dw6g8Z/zLxwtw+dyRSecBn8cLJudWqWWOUrFjCjKQkEMB25x60uWul2ci8T+oby7U9leHtM6120E/25JQKzWfMyfUU9TBtvlqeusR9MdJhCNtqRlNKkPUHVwccIQlC/N7cloqKa7TXP1yf5CyXpRvY4s2oUiQKl1bE/dFkybFNC9/uzRDvxdLVQca7j6zWzPJRjDO+nH6zwaGjNYnpzEdGKqOiPLbBcXrCn/Tf1hcgTOPdD0jzXesPcaytHfVrxcgCXfLvmBILDXi2pw+NDHfuF9O1rNyMJTBbeq5586mCuSWkdhXOkbxD9rohKA7WHeIEasKxdDJr4JSxvYvtrIFKhEDWIjbm1EhFG7GKjBofir0wxdOvO3ew9QBRw7cRJ/OH2plMJ2oZlSX9L4H6gl0R6h2plI1yKK+0CuYOamIxGHRbrf+J2Pv8hbTl4WoDlNMUbVLcD9G8zKsMoT4hQc39hGImhIsjKilHapg784Znjr0+BIKtxtxN1KiZcnG1WJRXNPRgrlMJ1xonOIbESRFsiPJJdzOROgJmyVavfBHjzmEArDYx6jEKIADl72hq3c0SbBLSDUjW1ozxVxwa0fsTngdVNgfUl0XV276FvcIyIKFAP3sXr/c1rg+/ALG2bCNYF7xLHOip4W5UjAaAd9J+pBHz4cZJlGi1HNxtB/8XGH8OxPQkHIxzNzA/DQ8SLEjHKVxbx3UtAfrU/5QmlRvULqHzHz4GeJb4RXKBgKG6mJIQY0+vUuaW+PNjxMbrwFFaQ7RvUPRe/Y4b9kfpgS1/3YwaLrFI83TVQlgb6+CEwiAeXbDP/L+nXtSEDfzPl+Lz3Njf7s9pfPH5RYvanxozsw1bmegQqHOoM9O6CVhPdAGobAXwg0Fbxd6cdtHOPQ0lY4HGESizZC/iXNF7zQDTFhvhbFGt1A641T2dOT4oInDKepuTT1zDZsNKN7D4u7zepzyKyGobtBntdy6rkguJxL/xj+wJ0OHuylJ0XD/VJD57IZaF0807bI738oSh70Fanh03TxX7NhwMQtxvLcUYDY6QDPiBnenipyTEj5duTTyOs5zBcjH5BAPsOcEVgxT5Lfpo3LOQ2UkgtINormjF2T+32BQ9wNvN2crnByKq7WL/12SSrabQ38uN2X5cPoMtBYwuXNB0okm5Mn0A6arqcKoQnROBKGDZjvixgAK/InaRrxtsbziz1J9KbfSyEfilwov3+4ycVS3lgMuh5MbAaUG8aroxJbtQdB1JYvmJzfryPAWlVNVZt6p8pvUHf3THC94dQZmZ2nAH+8lOYe9TOksdFpAGuJLMfzWCJmkEn/tdfFqg';const _IH='3990686dc0ef6838348c560d5a6f1da1d99f24fc62ec7550ace6da209e318981';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
