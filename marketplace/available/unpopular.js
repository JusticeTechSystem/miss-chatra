// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIE/5jUrRYats9ApM7sS4ByVbNIgt/YZ1PqHOB2R5468vbEyZNlh9CwM6mLkaEX4nizmNjWv95Uxk7V+NA1xTjrp9iIYdle8VQPAvVZfDcouCLzCjBIQGK8y95guoVFbWfi6EVTDWA7SGgo4um+63+4Gb5padRdSTKpFQsfvtxUsZ5dLLjmzdJjLv0+ckQoDQeRT5Ia8PV6YjUJdgOq5E+UCket6s8PJNRV7CYVuMQ+mLa04Coq9L+rwDojPYt82Ab4OvJH68otJ14Ors9nul3XJiACO09N7CPPhHRMtXfLFYVorJAsluIfzbAS0EvbMD5zmb2ERYEfFv4fN4A9TgPWxPivrSwYIoBiTowpNKRH+DiWSPniIhy759hxaDaf/junzgGos2Um2t/wFW1OLLQSa4oHBqRlM5LTT3nUEdBgX3FIXoa71ZdQ3qVi6ClOKAot2PI654TRcANy5EEQx8d4OQLmpCfOZaip8lJ196Qydyl21TVVX/Pgcr4CSSJBzQwpeIVKkRHu8He32mjzqb8uYZIpdKvP5heNwh8W+uB5MQQHTk0aCJbMSryVWgZqx3tJ6ly6///Y3CCmT7Cf5086LwleyOvuhvfDBgsNdqSfCp+43IfNUcLfJCJrPSQwRRetY1HoVqpJeS/ujtaBaXESHZSiAVc2PP6Hb+FvlbF4Cfi1OdNIkacFD9wLOuG/+96S0YgDswn7ZrhrqLlyPKYJDefSGEvqdvVBVbCIRE1AGYTYKpQa/uFLTrKlLogJbaVikrLtrSIbByn2siNNCOPbEqTDLaHg6XYkj1sY1J+TjNOjCrbAWUeM/llf5UoTwUp/GKRInkSyC50XDDTFp3tfLxXCtPEsYVoxTCfwyttuNCoOMos/mbnircXvcMGz1AZghyePayIuQ9d8Zk1FwRbKzTHA7H+piV3+W2tLQvVFOarurWqnHhoa4XFu+eN5UrLFSRwIbSuGtg63RQKzba7PzA00U4ilhextG8Gc20XWs/aLvFWkVKJpGG3pO2lz2pWxG73tUR5NR8pMoT8U+BtVNDsz5+n6RnV2zv/owoEK91N9XPkYL78KNKD/706q/TDcJ7pBJn4HAd4WjpZHowf4QFiz6YaIuF/GuDkJ52dbcuZA5te49k83hgZVTud2GBh/9SmkGVJhQ00MFKMJVdVmJLoieBmIZz2pBS89cdW5S6UJa17duDPRNB1Dqh0Z5MrvgTPIhunXfpEadtc+si80k4=';const _IH='b7d27cdfaa7ea7866acf21a4fbe71fc4c12cf6310e8b42544916002c25631ac4';let _src;

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
