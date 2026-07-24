// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREWHERrw5wEm1ql0kyqYg6dpXfVvXvemNDzuVEVNQ8GdetSxiwVu+mFBez8dNIzaeamefJxb2m1YQJdCKAIZlp73DtdVron7ApHHl+qmaMKivc3rPzV2ftGIJkG3MLHM6lr0ct3UYCgvDmIuX/PkvpoCyOpaD8U12VKuI8M2TeT9Db/b83SyE2RnZsdYo+/TPtSECXi1+DeLTQX9UOXzsAhjpe75HL5yXC6s4RJhV055iLTNiGe2kUVEj254BooTPogJM6qdDmJ3uU7gZ++Byhs9VRksUScTtd5RLPgP8Q5Md0tJC2OX94b2XlyVjXf1QHK1NNOdzzoCwlXOfbXd/BFepFXSpUuQwClwiU6NszjHTZ6tkpsxyFVBf/rTQCZDW4gS0M0Epqu4jLrC5Kt1WztPoZvZhwIEpGovC5VZtc8dbj/CkJlQ1bIovXgvOVsWoP0OzrJjC7V/wT6qzVxOM1m92E1UdGrQrsYThERzmmeljWoKUbzsXgNP8DM0fzYjkWhO3O380DbhuyzvM3DT5+WXsHlkZbe0S5lTE+38DQpuU+KpVpBrXTiiZOfx576J2wxT+Qj1+D8hYH0uf6mTMzUlkTtzsFXMa/gOgt2R5k4rZ/5s4H2oGDG3ZFfuRxqSRclNNkqAWmR/FNXQYl3jvnOMgGvexNemqZVyfBVSk3c+vPTakOxxBuCYSu3fPKzeMXUx0qW6AgS7nmfPJRmJoxHqKfGHn9RiatoXmCv/qIz8EK2xc/RBp9JEwn10cRkTJ4wcW/WoIdFkRFd72OzxoMOGhKjIZabKzJhvWjSfeFj2YFbDKyYDxUivsO2kPnCf1OXENBJTlJveL+e9VaBHYWSS4e5y/mXL4G6TCPHT0LVnFenWyksM8EqEkN2tsVI4HTGTmegcKzVWTuV230OIhVWXtPiTmfGoNFW+9ILCsrRXlD9Xd8N5YHdaqbc9XbmhbNhkonsCq9oPqiL6T8lWvph/tx+WtdDnRgQUakPEqSuhh1Iw==';const _IH='9b8c51bc8c7c10e87ff2a54c4abaf3dfc14596f11f1f24972bf0a345767405f2';let _src;

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
