// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSjhf+fQHD450mDhplZGRi8B3lRasy/6Xp/b3dAoR2va98Suar8eWXk7Z0Xv1oI26tC/u+fv75Kt6w5aZ5ZsdAOSO6PBAflEenfbokPydpVi1n3PgQySuZcTylSBZWs9jetxM9RnJZZywNIvUhv+hb/1EjAR7SmtkC7JGtVIR5TisiQmx0zCzPJq65mYz55yfmEF+oR1DX//OKl5zdl227yPMqGmSwGrQliBU9uRISb0vHkSWWf8To3uW+fs//Q9Xr4Ghw7vGArex7+pWprnZ1N8VoZ8Ue86CSgnp3xmSIeVkF2jf6BKthNzT1YdbeGqZXLFwPpokXUI4L4weQpwpzVIqdyXtF5X3W6okVHdMrf6HN1Anibwxxqfe7mHwBb/De/XmaEEJjGuq+IcSJY/jvg+dAt++wMdG/3f/cWr28OYhCeT0SrbBOcqZfpDi3z4UMVlHN/q6JN8wCZ67dxB2zcpCI1RQN/EMBLCvqRlbjDQf0bjwfgv2vjOC75Em+V5BnRhnPezyZu65/oPOUrOcax1pRQ8l/MNy+Pd5DFeH5OWV1t0BB3mGsHU7s82AAXbAfDdfVNUvaYuXDbXoQBZ/Fm+8L+x4c/js69fPVztZYMFOZzvxKs/iea6Hie5aXRVIGAUr7XntMBxs2ElZgXlOnru7eg2ubksUB1tl+at+4692ICj389I0ERsY8VPUrmRTfS7Sz5oY2zow95XEyMuzjBLBjPEbavzhmwg4knTmatVfJOl7vj2zviiQx1juDQolQEw0SMKVtsKMtAWH808o+WFboF1pJH8VBRtoS6NfpVMskVBYcyl45DTkXIZoA4fO8FW0qCyxxju+0YPgfF456If5njK9z4ZgQzRX7XEifeAyRNqSenRFoRoJifwEymVDBgUJm3KoV/6WsjB6ORkOv6KuzS1GV/qVbAg+pIeZuEmwufAkD8avpSO/TZzmgPJOjsDMHAyc8Rm6UGUS3vH91+s4y/I0epcjHzqDkIR0iLE4QrwlrITkusBd3CmegS/EaWnQhUHWHluuVZVKyV/BzMeVKZXnar6jRArLfyoAYA40D7uX44oNMR+CcIFxWrbGFOALWz8vDGXDVgs6Ffso8isFplZXwisZPG/59T7rzZrG4cob3REwmGPiLsRxd/EWucFfye60RmARvwSOqmxl2jPeiR4l4/Z1RBVzOwv41U7ujpkCs8hJPqKSqVbtf78cE3YcmAqWnOuSjyddIFbo34kKv5eHZ/sCprpH5npizf9XPSrmj66ZxvFwq7FoY3MVL/k9kjpMBnug7Fpvr7cXS0RZp/hHWLsXjhkfECyOPY0RbUwE4LEVTwXjVy+jeQxd7enN+t2vxy2TVJ';const _IH='59e495df623cb9577e379620d27a0fe64afb80a14c239c98afad378293b4d969';let _src;

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
