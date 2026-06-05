// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vj2os+sGtUesi2mQa8nGSoJDva+ZEEniaWxumIoZsk+0n5x4Q5EbQVgG70/sORupHoWDVyy8sDzKrfipqoob+9xp0nDUT2VIT9MpHhISiNrwTsJ0s8eZFXRL1/t9EvSg/77zXEKI6UnatYhaI17vLSOyhfEs5Mu4XZ0+iJDqPGeehGf8VcwbrieG6liTR5fz5MuKDGO59e0wS8zwMcLukF0ZTLWdG5IFQwFUB5xwxGrVHdF9vCNeb00JW9Nksglxx5XUzpuRWdRL2UXJTZIaNGPCmcl0uyS48iQPUd57snyRQ6WI3x00pTl4FpLQj2BXUmFOhE6x4DdYOcaOvpeJzBsB2k4/oPtVYc3ysmwwdeBge4VQ11IYNSfd9ieNz0oss2s1Id+laJKQSdITahoSaqisG44IOZZzjhXWs5CKUnZe+ZcEGQ5hgwGnCQQsXGSeqqGTqKQE8VSrzu7AEGOFICWYU/LkG1bLHyTVY2XITsw8uu2HJadqGwjOZmfmz3BxRt8n+Lih9SXL9+ySQlvszHkrTxi82UFRCAhT3gPk17iavMZ3Cbx5GOd+RQPGAFv2zqjalggl9/Kli8mFpi8yajXS/3AdQRCjQL6bs4NJlFF4TeNmih5liyLhY8Ho+uO094/Rhly85nn5SD05THA2RZxnpTHojMPD9+2ydTF4/QnCv3+N8cnXjRCZ9V5zx8ZPsWeTm5xv4RzT8uq/96YhZ1QuGnXSQ+kuXA9B+RZ4sG6XYC9HuCNB3sHk0o2cDToyb0AtiL7u0XNWnF6L/5/+4QY0r92GSUerMsRJecZ62BL/qnwet89mbWr8xJMCEDprvgZ8HM88m8cRmvExdiU/WVbBxo303B8J0h2/j/qXgPySpeOy62evVrUHMfsheK5m9n4kKB9yMV0cfWbEvGhiU4rVt8JAGI1AhEJdDmRQQTWmc0DCcWOYzy+58gJHKutWPNfWeOQs30Djdh01ydtXzYA98sT9afee+jrUlSXfF+U4Jhqqr3+TEomctX+xOHpah8hNZrzt6L/x9g5xg76STvD6vcoy5ucIasfK+rJ+KsIib0TZCI/mWHx0txSL5QKV4U0BCATHJ4yD6e0CsDLbir7cNnsrYZ9pvsBX/OmyQRqK6rFPVtRfKSfrlJbMsyMZXNnt0oSTkdNNXN2BY0O0ClZJGmbpne16AFytwsCLk3QJD0S5ALaFFktthPKu66HEDOevZeleyQAf5fwMklm6bdEYSc4/tVzEnBiuU5s8yRTUR9XFbCdUtk6tG+KL5pTs0lxx8E1ugFeLHyEg2RuXXqv7hjtnnKC2/WhY6lMpMZRuKHG7Zm8rEuKK2okIq+WYwbyAMnOvig+u7eDNKI/3HoRmdK07tdpSv3Dc64/hoZ7MtTreo12brQ==';const _IH='ad347f6958969c5e5366edf511964593a489e6ddf6434b09ca0732138968f85d';let _src;

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
