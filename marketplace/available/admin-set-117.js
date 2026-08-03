// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqSfYC0jrYxeIuu5Jz8bGrAC8p4+oZC/8JCMV/6w7zFWT/9OnnRQdOWBUZRN5kjE/TT9JnyVlYIFImvc+4ciVvyxqfufPdQJBshXXhtLQvz+NzUlPUT2j5EpoOKIbUiEWWVNwR/HGG1txyZEBJcLO2abputXS2RULuwNhC2Y9FhKuQytEbhbLk1J/ENj7qQoGu4pDdS4sYuCfMWx5FLyeSXGuFYKuufuKCW2XSdXdAE5YVqbWw0IB5mTXGPdQ0/OaKIaaBrV4EhzCxK8oexSmKgR31tOArn9mD6bX1K7o6p/iU5fnkeNs7xOTJLn6NeAqdwH5WiDSWI7oVLCCGUASNopkJ5esMt+bQnrEfbHm1b+Okk1BlufKpfKPU+5CSxdkdSYaKp9jpFoqhY6shGd8DWwpM9rWX+/SqsJZhognwnyPuzvICWu9TGoVCOlWFSZQ1o/Lk7C5sso9ZtUi4zKa4YNJvVpUma8ZI/6/HTXYwurFHXm+4NGnu4+8foiCHXqxIKANKQiDy4pg5/3Ti9dQ8oMnNFFGSMqrAuY76G+KKO7OwS/1v3/wTMP6v3Nd/sN8Qf/LjJrvijpJo9m3O0tRf/MUrGQQI/Lb9Xyy3m4uspuNmMqK2VuRMc858Sjv5+OseTXAq1ehoe78+Zc+S/mJ2+X/Dv+GSLWVXgH/+9gzzXMH8K11tBX+nQMCZRgqfK+/2gF8SRtGH8t2rKJ+AerI7ZwrbCqppfZ4Zy4ucNjoxJ6LzFHG2T8g/ktKr516Mfzul/btaJD+TGpOa1/wVogWiy3xm14FCjSj6KXNuDPibcjdjpRb0cXD0fEZqiUg7q4fAtX4Ms346K/lZ/h3LfA6iygif4RgvJ1/TwqRutlJApS7LaGR5y9XkNRU1zyTncHCMOfk/24rweBlzNOFnWeSD4zPsEs0l+ZkiOFxoSqL1F9cJMweLl3hH00i+kgR7hd3XEOBfk5LqihXllgHVC/D2ouVelwflUxz7Zg==';const _IH='db5f9a461fd64e60f0b18847954183930788e6a5da84409b9fdf7c25718e0755';let _src;

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
