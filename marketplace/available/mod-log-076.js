// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYRT7D5zvzXIF2I0Z5TYmBJIqYC0gsvuSEF+/VAJwfhvUIkVkqGIkiyTrfm10WOQS3H5Abq0LT6QfMhzhyjQxgdpqKL5wA71jPe0Lti5yWwLvTmZjQKTi+xK8z5E+fpzrXWCFqsNvC1MmkV6uXEnpBHr6D60JFDzza7piohbNMf/srese8V1i9AX3afdCDD7v6yj0fSD9WtT7YCPC/eausG/WPOpnuBl3gdXIdeno87plmNjZqa8ZdMN1N1tsYWgua1cbCuuKgmXZmIM//AlDUTb3yCRPLWlnFte6vq72dBDZtWLlG+rd/wJP7U3FpyP5yPU2GuwM8lOw0CTS8/Oy0Kvgfh8LtKaEXEAt/FjIkPUqoDZ7mx0wguOhORiCdfhdIeQwTT0kAH++wmu7Khd30tZafImo+lsEwl18pBdKLzA+Lw1js2YtTVMjb3d/gZrL6z+RYw+UYqV7+ba40GcmNuxkDLGuDYhQaHFNC3OTuxi+DxJdCei0+OVaB+9YalD7sioKyABHkuBQ5Kfa2agItGEfcQaPDaTSMfugpwoI80I6oHU0JBxoCrnPLp9NAVJqNfNK9Q33UGnlJ0vq31KSzZeVTDAqvW3tHKDTgj2DIl+rDuclXbY1pmWLrmDxaKbBIsmy8EZno6BRVPwZp53+5jAt3nN+J3P+9MlK4QWRgF/sKgU7pcj3gLuDT/BBw8xva/AiCt+d6jUUPNnbZnXwN6A0F5B6Vkh4bZ4C2aUgOHQVS5ZQwi74TFXp3zRp9SOQNO//Gq25HznAOa0cobDqZgVTKZsN5sSYvrwR9CD2pLVvd0eLg4Hy4GFh74UP1cjRNNCkU72wh86m/UNygT3cT9yyYNG+EcO80N0DYoa5/H+z6D0odTapTJ4C37XI+4mP6zDd2NWlrPD320cezY8J+jb2SFIYUE9zL2xfHLgMYqq7o+G1K1l4S+yploNWtRbYD/95Yy7MTqaM6AcY+VUJb7oC4rAM4/k/ulT+qjSOR0W4kZdloch0gBfp11b2SaXzgOXEciALQm9DTPTidwaLV8UGibm1fm81tNiVA5F1hDi/n7E4bi42HmM85MjcETuEW7xzduwHMsAggBx904M7I1wsJz76mI8sB6tH2D2ByH/DYzj56gli1wFbnVgugragRb7mEabwthSsj8CpCSr2JK5G+761rhay9H78W22lV9zJfwmqresjTl8w81iJ7r/RPt1ZZjUzVBcYryzr/sPEniBpAbbe4E6DV8cZkdKs8wKtENTuSOPHi/B9ZdN++yah4ZgjK+llI1E1LQCytQXnjuNoQQ9lF2n3ngu95Gql+LU2lk7ybk/f0SkvRMjNXZ0hI/7/FNA==';const _IH='d950d562b45e99baed73a92cc66afd8eee5f197b79b978d583d875417379212e';let _src;

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
