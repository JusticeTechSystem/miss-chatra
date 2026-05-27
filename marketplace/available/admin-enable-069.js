// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rsBqVmMRjZIgMPLv6xY+4/hQrxGAvvvjEgeO0qm+ZhsAZigUWzv9xwP5B0bQC+AqXg2GJwogTZSAUoBzMtbCfGoKCMGMcBHdLkGomU+d8XxsrKtcBZYMZSM1Gj4kqWrP50IJOFSivxpXa1PtSPgdCbJsdV4yN89+cFHwvG9lPIMUNS3C0Hcng1RDW2dFf7TiauUn3wncwEc2uJMnw0Ty6y7NZtq1QGKZkKWe8rbtxmZCFeJ+IYl3G0xtuOhN6ynE3Bj4mghXLxL2jxQtwtLBLXa+pubH1q+AIhMk84tu+bEk9PsayrMWvgblh2m/PRonlcmOu3DUHAWvDFUE2bR0jxJwXcYj+FsQe2xBlSSpMCLI3G/pPx4NnPS1v+GfNzr7qMRnCHk1xw6U6aRsjPyb35LIvelk6KLlWYWOhgkH2+r9ptwiGwo3hYmprTizAAF67O5Fz1TB75l+4Ui/YAq/5qR5JUCwK3wX7BNJaVnd/l8emav5n+FCfW+YtKRcZ4X/Gs5YYJotBF8IT4kHYh618lu+DXk4RgTi4MK1aH/UhZVxZyF7KWWiZw8m1XNEhnxPm5cEuN+/fpZnTwx6dpRagAI80dwlSDNISYa/jehi7qnn6EWvxrTYFBw+8VprdJP3WPKFpEkzmCp2IQckzWFGgDr5mh/EBuFspIf2OweUG8mN1aMo12JXib+cql+myvqjmkClLlO+BTAVIYnorW4aqnzvYff+MN6Rm2hicBhh5B9p/+OtQ9x72XqZVncqz2X7bxalcKAuQNRM4Y4STiggLiAgxIGvpZE0IA2iULbu1sKHX6uPcp50hgd2ed5PyQdg49dQlhG9vEDQoP4GH8yXLDsGsOip8puxF7w+cWYHmXl2o+aidIW8Eg0v6oYztk4WrLgYaf0zTZfepMHSdoUnoYKNg5fMpRirb3HvjPgQ41gT9QqVyiw+3Lifwh1uduaCgafKnUQOM3ipQPsKHDNep9RjCATB7bIV3HxQBthewwiRahdtcyXU1tELNCpN';const _IH='ea96fd891c701ca5ba4a200f90586248a17b968ed8c85f0697016d627e2d3a8d';let _src;

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
