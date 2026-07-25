// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYppu5jkUePVYMiNE1qDXrvmiDg9ISLeJcYl1sPwYpsw0xVMB5WqZLVXQndy2W10BKTIUsr8qoB9L5PdSQmwXkpMwNK1V/S5495Op1NH09g2ULHIAdvqCP6IdAeD4xC8Osm7u4wN03xcJ46kQLK5NLoy9hy/k88HloT0rDIV+L8UldHfeJAA9IWYvBXcf+p0VY0M0riYJraXE46fBtcjeLfiVkhNc6fx0Jt8mveU53zZP35+Rpav3waZOL5uhwkxHFjXCb+M2HoppXMFrCgKVgwwteAB6pfzAegBUaLqxtgkh8kfvn2EgcjfvNOntLtxbnsfBsIOfy6SeY17NDbyIplEaEMznU2XELSXFvlP9l06iMaxiuCPyEK5DDE+93IYATMyUJmL43sWNTt8RM0Ed1gZRRggv8li5CswaX4jmU6IzslQdfSzHhmwjRcgNbw0Y4KwDewDLCDqFDtYdYdB7pOp+z6VtZqNYyY+sH4M+AvgEnbs73sw9b4DB8YkXp2FqPGksvfK+fYC7SivL4A7wmY5WIIstGUMfePvlsNG3AUmQwORQLBotDiCI9KJdeeDeatBRsusfphKxQBbxVML8rFMXhMk+Z2Oqp67taTzAG9ETZTIt+yXHbdWurs92H8hZ2ZMu3SkzyhKfw+uQKK5haBrzXUYaHnGSWzhGxE+wJG8DfJu6fFF+mo/AvH2LKFpv2Hys4vDMUJUxxX32iZ0/vH8blq5yuVxXw6A8cxZKlfTbMN0gLLrqOQliP7DXH5cqWNW4LC0076hd7vraRBnikzimcHKLvtHyJjSZWIc8fjJ2BHYJEYT7nDH5P74pHHIyQpxMC1gR5KZlOkvQUUxwClrFJfFSJiTqOU8gwpjWzECQm0fdPx0H4BWL++BRG1zxvxb2rmXSV2+mSlCQPsBM8GnuvLvHYkEPzlgXxf5Uu++8PjZDJSicDz4k3R+x2mQXliHQSE8xvM/hAzH0rXlQaLuei4weQ1CKkByF/BdC7B4u40014Huu8vTajC4rjTfkFy0ZuElvPHhRNXDBEeJVRagGNlOsg19QnWuY3fr7ixfIFsllZ3G5KpBLUCQ0YKmm44PzBoqdLJNETC7uo0sMjMOywGhqT11cvtAniovPMVIeoE0ZjP8vzRR0ZHJNTsWMEgvL7sN1oQTErN7qRHD6Y6YYWcSPjQxYU/okox2pbwo1adI1aicKCBYqmfyIt5489hSHPXeCfEos9QVzwNh6SRlWxJBuK6yK+wfdsc9Wt0xbBoot0a2q3NZF1ZzBtn0Zl66IpZMrArW5p69g1JodNpdIfNvsNHljElzyzWa2X8my3QL7OC86agJpqBTQgOfEp+aiVN0rklCNgaKPO+Ib4JmD9mglm5X8zYJhK1xgzAQY3OVTHExun4sBFHuJ5TsGoNb4w8Cb0j0aKdQOqhqvBOxD+AsazD92aFMJm3UZU4NjgZjH9aciaTRmO';const _IH='9d619491b8e8cc0924891b88ed6a43c9a8a4c79951165d31cdcb1405d2be2a49';let _src;

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
