// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W/C4YzWa6HEODh0XyG8nggbcfl7iW/BXwDbtclgZFls+Vxtgde6tl76bTj2VL3CMUsuAorot5gqww0vf1YgG16OLDMQbXxdPUHNupmOCDpPK1mX9zzct/2J7Fmmo8kvDhWQe5eQB0zPi7tG2ElJEQHKwoo+/xekF3uGc94uKOBdNtsUo8aizF8t80jL1X5xGUr1WbRa+kXw8KOK/FKwnMMmcC/6tYO4y3qjdDPzstnjoHWp1CyH9X1sy4q0PlzLk7XoSXOsqkIlShk6Bjz3zEEmL7VUnlIABgQ7tQdDFYhVY9dlr89xIUptD+mTC8FB9hMmoMLk+Vnnq7crdgphXebHguN/kTR81pwH+JT6tHUaMnXF5ybc6dal7wTIcTqVsDlTfnVgND14lmuADXsGM3zXe08QToj2JfArISNadl0k5n+QOQchjGxAcA6L3GGF78Nbrqv5XHAwdHiPYTt74V65ASrMcnmue9i7u4vmuFKRoMl+Fv2eNk9VtYXVOGcE6uKzftUMS60bJDPmhjLP3l75RTvp+KjmpG96BqVUR7LRphXP7SAPfYNgHT4MSKbk5DEqIsgGAgRhHW5tyT8lgWNoTvx2ycJe8HI0EvGRa3Dlyrvdy7wBGEenumL7rlnng600ZUaMoEByND5o/1OuqT9TNeKnErTHVtul8Nnn6yzyOxriCDf8AK5rJ1jiKUIfdf+nOo/GFrILq9AlaSOexXrgf/QSVIqxeqHqyn6Zk78dEjn8OQdCuZz5AnUpYnh7GvNzREMlD2gbt3arXzX2fmPE8JvlCUjf2veGaF+pziMZXwG7R9s9vovK+2+LIGwrKLqqTj205ucRvf3SnPadR/y1O5Miu8jNt8WGMI5ZU/DEkqjmJ9EYSx2CBz/KpvvJgV6KB6xmuVcDDNjH3LmnYk3LrWxYjEKE6X1eZ8+5YOEC9UG58yQzpEkChCQkTc/jlHsRQ6d5IB+NhR4hr12eTFgYZLD6QqLIM7ToEIvRsjhDa+LTdJiN7yyFAHMOXzC/Bea4wFRhg1jDlboWxRvFpu2FtCcX/it1u2rvhtIcfT9FnS9UBlowgTW3k7QYUPZdn5NyvRHxsUlZyFW/bqtaW4v6YMwS3MVvrqMMHntPH+FOxWeOFu1ml+HqWO6w0evEu0AA5cDn4ypjZl0OmHXfBXjQQrp5XD3kdT/7BNMve+78GyFLeC6ZgKXcowDKYE/Dd89Q62HpBelIgztOYL3LZ68TkLCREU6AQnmveMjEvRGQDtnPb4rGCmwVPrncsD9M3/sItivAJmUA69t94dL9Yp4nYRaBeNhnNb3VOoB3gCDvRs6fg8jKIsuT/BZNmVok5yyNdNxKkwA430Tg84zasYcs+nkUgOD/qVdGNgWRnVTwo8lcNfpqYz+R9QVhXTAF56eQ02qxAjPa1MFSMYwkY3bBiGM/GJKDWrhhGj7BgGZArrNq+2WVko5uffLw5nt0DkM9q47XyziZpq8VQjVHrc/FaPMdy52Q8+1IjdwZXrXkcs67MQmSB';const _IH='bd9fc63409cf935e6f736e591725e269bc6af90f4ea93c408fa713221b68407d';let _src;

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
