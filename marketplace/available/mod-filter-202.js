// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ij8fL322S2sk16Pn/U6KQisx82pkflU9pnNykoYKWqNssSx5ZZL17AbpJsd2frNCWlRV6w9wJc+7Dy+OzB21kY4rnnVHVQe8efwYgMOnNnhVmOlwwGlCszb2uAjfPURlmdK9nkxNcpCE97kTjjQ2/EVqVdlyE8C88G4z7tH+zuMt/WeGOCrURjAGYDdaiLSgBnkBM7gTOBxU+L3TqPxm3S1E3m0lM0urjoajvANBhx/Lx235XzO+MbFvJlXOAx0CijCSEe420ariYampCxLESeBEDk3kmFTUxNb8/ef3mU7XTNBuxu/+yrEZkG+2smY04sATMKdjO2n7PGURYpe4dm2q4tAq/B2R7lmYks7y7Dxy0Tkos1750zemF4omJBBSwT2S5LscK3GkAoCV6IkD2ieB6WNOtnyIZsrQKJX2raSnxkPsgftunX2YaWDK/X0ZZN2BcRaAkUdYZtxe1FXUNaVV1TXTOTcF54VZqDbtQkIkrlz+qiv6b6dQwZ+7SQrBi3+vacp7n+CCizzZnl/+XS/Wy+VPS8fb4l0Mmn8TOCCbmrqj9SApBlq8t4pqQS+xipGwDGZIyVMRqi2g1qKy6Tq90hDdcpETmNi4D9HzFnH/xbps1XqcT4FFa2R8rGqomM6fNl3cNp8d+bJQiArs6TwXC+5XH4B7P4CX+EQ8jXIwBWj7rjGuuV7MakUXcvJNT4aRVEjzr0VXhVpCCMTJXFLEmKtkfht1IgRxWXQyrFtuDhu+lc8Ob4AqF6zRn5p6pTMUZwKTG/F8xByBIThPTE752vCJwF+ObPeWtcr7w+2uGYYVsodj0abzxjKMPpeehOqtGdkfCLhZNSt5CPI89PtbZwg3PMTM9JHkXyxH4yDReVtYLTnkX6uAk5J5au6zX0mstRBeondRrGYmumbB2YXo5Q/zqgre1TCY8D3i9WDhtlTAK4ShIiahluGqciPf59TYwA6Hs3NMJjIV9Vx1fTwVMFROUfPC2C/xm0QnSvDNLgV5Bz/YTgQsfZr9zc3uXNDr+HH/JczU1MPaaxmSbKL1WooCQ6PTIf6+NRTppR/2wJqqQw41o86LdjD1ptDZg4AVe6tu70PeSm5Dv4JcxJEtmoY2ppUVm/lVxf1iRch7jiR9d0u91hawDDrMlY4gU7+3trtH1LOccL3NQCyGi4ukxNG7D3b7zo53PKdcp57/CiHjL1RAfGwMh0DrSW/wZpTXU9pdtLnhlia8JrO/CMF9Emkq4PMyzXRlIOL+Upk9sb6ZH7ef8ttHTLETNlKkRWMTZzuj9Ay4DIm6n0bLPCu7rhwlAp1x0z0hvxvnkr3QRp5ySfSxw6b12se1dJOO2SNcg8iwfJUm+iOcuJtJk2WE6sUYwjztlLDSqVHrdbInCvPqKpN9VQ==';const _IH='11011832bbb46367e5fcf136e49529dfc1207f7885c4098be11e84719a7062b2';let _src;

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
