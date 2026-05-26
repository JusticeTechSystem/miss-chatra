// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5AQxZTCFQT2FC7VXaJLzSsb4LKrA/PSXzO4Ecak09dlgUO2uNWR1SupLH4x0Ar03lVfTOKHzUTbJ3YXFt1YkfLj47OYtdZr+GHT3yqfekTzi3i7yrTK6ecJUBbc9dR+0n9NZ0xE0flyfZUk/HX/8ZnXYgyIrD10mP3zaKiwUjDd//jehFUDTZH4aP8X7qJ2EIMbJwKrfmV1152rSg+EtBJ/mTZFkzRQ6lC8EWTSVgthjWASgi2Hhz7lrWfzP1hVN+GA9auZyyefzOfU6FHkubj2JvUaqKL83RNIcz3aEKXgalNWgc75DQBrt7MHj5g+AxxiwfUwxiLV6PR739wGA0A9w2IoQSb4Vn5NLvcsb6f3ueIopwQtBgZOrcC8okG9dJorvtN5P0auhAI3oUP+YryNPkaalLiYtz7g4uXBJtXT/n51n4kSFgjdlqptJ15NJf8aNh5EhY3162Fs6kyOmD9ZUfs/yzhkW/EBjv/j32ROhp3Ufu+6msVdd7ShAAvdCPEXrDG1AKzxYYD3M2AQ+Or74+FwHrthD4Ye/3orIZhR9xDbtv32vEN+pZXbSiCSYslOhjHAqJ1dKtuejHW8qtBOTVaI+p/m0a1awXo2JoNKn0/I4cu2wASOGjJWnV45rH0NA7CI+/79PXuB/vkxIt1zZGgYve9muTSsCeWeKPWNme3TRPI0VVEZogzqBAW0zITX9D61DDq1C2r+t6SjvByFN993GvWZxO5y2VtuCog==';const _IH='3d0f83aca499d9778649c4ba0c3d5ecf0cbf9f509450f1ee86be56bff8361d94';let _src;

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
