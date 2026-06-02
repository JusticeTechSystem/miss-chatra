// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MV0FLdlgA1QEDtsNXfsp7kRLzCvTtvIwbdrC32Zg/dnOVjvhAEncTZ62wbEpQtFtN/YBqGG2V234TuipVNDhzXBLnRDQKRuq4thx1xaLp4ytAlzE9qn1ggQCVpjVMWGAt6fBP/GIsBIL7v/l3ibWkqffZB56uaLa8VJ4xzyfW8CIdubqU4+OFwv6RGOYpygLR4iykkiPfZ5QE+UstJt5glYZ9x/0TXWFdi9iiiKR9eUUA1JOjIabGkRPf6FVOXWAekid/x2SrxpQLReLZC3aOOvmUKHIz8cxSdemGA1g56KcIlt/+6mbj0sQhqAdy+rVnF2JZi0wWrUcfDYUknxcZmUZF/7Yr+wtAV9ivpm59MP1lAXuDo3LJDV69Q+ZFFGgpPnA1jJKoBAvEFciFgnqRj7QTAkUjP4s+9GeYtK02OII9vFB2Fl/uatuaWqQsnfrXu9Npi5S8NBiliugbo9AMltXTvpJzpOcDp2Ct+Q9OehZ/kVWvtQaBqJZA9n8P/uPWE3fn1Rn6020yG+s2A1jiBjTx9zJN7Aqfog91dv6hCEB3k5Gjt4GLi+vf/Egby2/SYAacFstEIc7CFz/tHp4ciFDeTnENb+St1STSHGVz6GH4yAZ9lPJl8RFsRb2Y8gT8Hrp6SyPxWvp2NSFty3OkEYMKwNS7zVlUK/SmTgBHn1w0kJ1vU0WBvSps01elAZsdW3xbLHmo1B54BEsyHU+Xqsul2NnuXap9rW0T3dxhuREPEzoBgE5gRVj1oZcb4VDYbApTMSKOCyEkIEC4SgAOaF1VdS4rLtNhXtTQHCTQjFqM7TS8zucBAnZVxmSljNxIeXpdOhyn0JUq/XeSqMgFazgKZ1t1IdLyTN0tlfbxYmW3d6r6c1cAvDWIa2CWOTrMM7Is3vW3yGg330fjNeWduB6YZCCmWQjenY18Qs3axsu+S11PpKOAWvtZPpDGxGDH6AW2pqJhpnXYVO6JO4+H7PYAgq0YL2lM2PmLyMo3DfitMbhxoVYhdHFaVbNRo1CjUL8Bl6SG0zkLXYUQY7+4TEaiWETnRuCOiZoR55Z5B0LQiiyHO33fwLLkYqJUPu1wf8Hn7oStU+VNhISnfQtEjzI7AsLHwUzkyCpqm+EDI6nbSX/O0foAiPOsAiUKtFTHkPgq07+c9i6Im5bjkUBPs2EbnQC4M9DRaRLNDp8FcdThC5JJQW5CjeukqmxHPvKlokzmA==';const _IH='3ca6392d3db82dc2664f8396a1f43ced79d0a10a9f9337b7d1ee4f40ae75dcc8';let _src;

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
