// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XX54vuVqV7kTPZ8EfcVkILeIh3gnBZjCmRszrPRKhDzJsr/jmd3kWuDEZ0pmeOb1d1/+XrLeGuhhKHt6UBad0BiTmi9aDy8gIFU9J2wM0+VBiGOzzXOByN3xsFxBBQa0U+oonQaxIlSDv7aZlPK9ti+PTYrrFeQociprPm6U0inViZnUkudeID7rwtldEe3Uu1moFcOQM2XimyQ6TmRhxpUtavQVbOWhLiBcWdZQMd7aZrsubFo3uRc0bpvKGdx45x9eHsFEiWZ/8vn9R9HYWTdEj/fv7zyb2oRZdT0S3EBl/uA6Kk05iL3zMq1QOB7Vxql09Ga+q1Rmusk67eQ2NV1XziNup4wki30yWTGwV3VrfYAVko1KAvS/tHO3kcdwVMfhBBhCXUxtB1rctqJUjNOkizNujQoZFuBa7QQ7jpw+6m2qmAWKeDK6og1tDDJLpe5VBjrIBo+cMOQfyqAFiNA5wdrIpX8y5sbIICAqnxOWqFTAJqlC9txV1iOLcDgh2zZrITAIbgzKonCuHkQWIwrcYOZJTUMo22rO4aY2zaMJKDJnceOoFiNJitvuCjepX9ArfpmkCf3Gyxuwq3cip2SCC2VJLg6NFzvi8seZI9clqxgHpI39BbQg0kAo0eiJ9xEs6pw8vlzIZWs4kUc/778dEKTKqKZPFQfVaXd4XO/Wm3wYAlWLXzCTkgL+lelVHHeXJBiA+L8kb/GLqlJotZC08ROTrxWt239C0TYLDrgWpg==';const _IH='cb0de08afd9b9fc69a2b0d15513a0c1e1085d1b8dc3905d753badc4e19a0d746';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
