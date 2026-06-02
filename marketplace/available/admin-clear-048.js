// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6pikDuIdBqBrtdSgw4JHEKtYG6OHEwyfFzeblxicThxi3anjZyo2wMntNslfleo4OSNPDQTp96armzukZv6+Mw0UWvTQme7gRz42jQy1JBA8fIaNFTrfcn+xy93GFKDN/MuqzWEzdRDxJdPHhXKv8fx9vnYCaHSMA7SVy3U1ERlefLYkerBrDJZYhhwILXD9CEVzkJy93F9dV79qCGVOIVFunV6B49Z0b0jb7W5Zx1uFYy0N5W1Kj8/guREHOupozkeQb42MMn8ioo4Drr9DA2q3EmL7r492XNH8xb4/nDmD2tTv6On2ukDHO6JfcMZrAM7YcNY9DOB1APTDHD/4ah65TIGaHt3sd4Vguv6iNiBwzDplvVPKmebeTEs5DweZQz79PCx0sXCQQIYKmohwBstRsiV2iY70fVVGmkJkm8JpdTea0wZYFjhwqoP9MNN5LSAm2l8vTfp4EwV2BtNTmt+uiNFzvNAL+3SegX/MfLQekRNxYjH/4zkYmL58SHb6GwYhfn9iUJJdlfsABiveYmDC7JOjNcMZyBE45Z5v9x+fBSZ6Ygb2bvueQCSKgVBSs8Od3jwfqE06sp728JeRs6rGxLIBK8HgusVc38eQO8medd+tCIqZmnM+Cp+tfwYGeotYC7FbKk/Ee23qXAj9iTU2idFnlwm3kTuORidbKeHHJPqW55yJzZwmmVk2NBnlAvHmz3tLTdOM9XSOp30VwCwdD4+4dqBLtA5jL34lT5YKi+naFu5yUoBt/AVWIvO6125xNrGKgt+6HNA26+lymFUTFVJimZnn1K3IVfWwpMESMNchIhaWy7+svb2T7yeZdWKDg98FNFRqwFZwk9dNNZDuaQogmBIwHiIq1Z98OU0/8aWweMvag24azGsx4305PY9bkCpARdUWUdBzGqp21J0VueX3WePxT8bti3KSFfEB91H6yFgUBHjNMB4XMsa4tocSvrJEYbjkpiOwfptEjM4ChPRG1mTQqx8GG/uAbASfeqPBpls=';const _IH='0d8ba9d0f553ff973941d63af4404978cff405bb2df44a34cddbd918749f6a9b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
