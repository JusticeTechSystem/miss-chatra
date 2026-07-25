// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVLQflmN04w2F4RUVHHI+hEWNTnUsl67nE8CiWEAACy/wweqDaQ5TleUJGIVOLAjtM2Kga4WQMaWhm9b91ijBChTIZSJ9q5ihNHWK0W3Y/Jfx6yT3XS2DrkZ3UtRi+tP79N6MYHByQlxiIebt+c+FydpJ+MJ3sTcqvUT9QDO/G6cdbKeTPVUkE4rywW0vrzVLK/6R10afNSO5d4AIMpUwXG3Aj9RqNq3mmQSCbwhr+b9zYPhFs3wDFnddKbEN4vCf9KsHTKH/9DDWNtynyuiM4g4jaF6MKLig/+FmgGdhPLF2eaFnczwcDUuerztdYfA45ZREIXF+fKHmwhTrTtrHBXu4ZAqNtT8vBwJ3z1nTQLfCeKVGwrGXlkLlwgOVxVKJhX55KTyPs/HP+t4pshD6DRHCwt81Ax0+WlfGXqalGOT65Rf8G56UMFJgG2kBmRqJ+OsghoaHq3z1wcJJQ+r+kXnKBSApLPkvxKrXZvOwTnOH7bJi04MUBkZkDY0PeWgcLgvY5lcTHJsiAFxSh9aJI3gPzZ1eJYvsYwlLBOHviWbsksInKgdbi6xfofzkPLBd4m4dOizYN74njDdILcEFvN2JNvNcMdFppgmD1snJ4bmXmxWbhUseEi0DFLGNw0WPqf4ZqEsjBcI4mvPuTwDdJXDurN3SWM5p5Iqnq3Wxqs28sSN6ZnBtXlWbSw0H3cK2MD5gKgaEoHTNCYtckqbKi94Tcqo28sX1Ei8SBomK5FzrLRR48OU/zePcH2jNvjueH90VWbRzF3a75H14++BV+h8d0bji31XpIpKmkywMPy/d0D84q5j2Dk0PkCzwc+3trcYbMT24Wmcfs154l2TzuELlBIo/lA2+DxyykI4Q5nhvbgqoqq7a0j4Lm9tklIIZtKPTOtYMIT/XzRoVkjoMDu3227idY1BR8ezKpBp6fADNocdRZrOiOIcRVv+4a96S5fY9PB1tytc3cwuFnfrkWZL9k+5G9iAVvMaD5hrnk52FbyKZc/A2sBFQ=';const _IH='9276748f233207764c0ea66c4e8bbb2433b4693dd16b40ea97115267c3e8dd64';let _src;

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
