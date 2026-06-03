// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nVEzRgpzTf2P6gTrJh74WJdhEy27O6XKkatcM9NT704J1fIAiuCo9vvaPx0DeSznpnl/n3KfXEOIRfYkgyn2NsMeLpZSQ/XANuGTuv6pGcpDhDky7Y/evbLRFAo/nVHKHO9CT3A4d+sdKBAS+o6/JBbc7at6aqpoGV/xkbhki8bTX63aCWhVfX9YyYAJ2nHbzHOlCF4OA35Qc30Dv/JbJKZEdzLoHefJf8esnGf+dZnNc0d1LqhmYpsnQqE4tgOl1uYuXv+EGE/PBEyQZ6QxnB6QJPKXKLSfPIR9kXitNE0p87nJyF7vXoE11IVIb4g/GRG85fWau20FXqEy10E+ankZy1RE6ke4YuacNrv+2gvxmDz4++yhO1JqpMEA8xqBWstWFAgY2++gmSzYB2WNh5wvBEeXqN+bs8Q/yZVVtSul7N+Nni3gIa1qolsbnLHkrrAPbo/RLqwAHE64PuAzrpp+tVABzqLYZH1YxDiuQ3MKFDf0iMoKrbvB+RfjszP06lKK8G5b/KVyjiR3osi78jE1eEko4p5pllSanqNFa3JGJEdeCaVSCL01dcvzK+BFjikd1Dh6Y7LUPkWQBwWr7DRq5FzzvVf8dbqMzBNTb4fmmmbC3UWZfOiWC/JRNFmyOAtNfJdZjwyo5unuxE+i4smm1gpIz3tXv78KT+y5CWYnVIE6Nhn0kAJjmQHWjM101ywPuuNm6Tcve+Sajt9W95tfPVeIWn4TGsDk+cYexytqsWPmxu9jvZ78QKht7NwmeFXDdq421gStAAnMGTp/mv+Rvw+Wo747ac7CkkcAB9RrN3JoxYD/lx1A6RdTd+iLT4Uwb68cEEziTL9djUdBfAWsfTkzs+h1Z/1bRm/QQOYBNhoV5E4fXpogSWNrJ3Si1alhTImlRDt70nSe/atTTI76IPmtVHqInol3BOo3TgeO98KqOfoa42PF+ltLW7Pbsw1GVzMuMWc4XKKXNTml8ruumFny+GwIunaTMSmE72sFsVf7+r3ZbLT19rJn0isWClfgnYIr9lhjgd9qCTwSm+CPi0OKiAdYqzqEbzUqDrA3LzFxsfrIrHnzVZaPH1SUYyW95rXd+/POcTWS29p6B1fi4ZfYhpM4ajIFzLKmq36XGu6XCp3WCI1TqSaES8uVLJLhEFgZVhUN/YLJPKiK9w1TWeq94ER4OFKIGbI5VTu7kRQB2IqDqTtvIr7tdgIz+dBQPVZ4V4vw+KYhc4FVGf0R5uTcX8wbMAb/rF7mi67+9V+rdDIsOQbGr6R+ikM/QIo82e11LSaFvGVoX06j5lDbJp2fHjHwcDUsIgTSdZsMT9mymRDCpq9p/lXEu5m5qryDxpEYVtlcJTrUb1hOk6gE1/ReqURqudtm068e';const _IH='38e7e39fdd356356a36576d313022f8f3884cbc38404ef17d3e7a6b5606657a1';let _src;

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
