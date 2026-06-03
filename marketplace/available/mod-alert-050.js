// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QIQaxutWhqYLJlvB/ko5BWMkhA072/XE8Fv/TzM2pYrMPYymUVigAnESBA3hjWGqPVH07zvVZ0Y1876IqgEw3qeie8E+zcqxpoDZf+N9VDwN+YrC+PBRVggbpKPkFlK8s8HRiS9PghkIg5XEKIO42MhyVjTaPZdD4xZMfqAqmwoGfmu9YgTrvRjDbJ7M7H90qZE3yUua8yF8s5Laj638D3hfKDWNJCMMmDIhOAlcilbqjbUFfWFS48Q4+qEorPw5BEp9pvrtXY6FO0aktedUTxzPbPQyyR8W1yuZMCohvfNXSwkiQqoCRXty5X12ql3F3mJ7v/2vbMVi6yVAmXK0zbIwpYPDELNcz6rM3aL5xhRbq6L8keMT7jCTcpSUW+DsDP23Nrv0Oez+pVMsK8XlG0Z4OhsOWyCYrlCO6oeUZYh8+wk9x6n0FIBUI31UgdOztgt3FrVA172CbL5bm7637quD9aJ/NI3SLIjwwdLzYCExZk2XXmIef3s2ZlgWMSJsvDpPtJ5pAEq35JBEPUUD2LVVpingfiq09EBZ+Kae2HTQSJKUnNJWrZjuALbtbr+Ez/zocBgw4uN+kOChAIcsfZy+0/gD8HtCVb+yFt/vhIuWYrZapf98hPJedBTXqw32WHlZx7DyYYRNmiRtF8v/AfWm5LV4kchB0zqWJZ1NzJA9CEzfryE2sm4JoAWso8C+HjlNC4w1mzJtXF0NqfgLJ33vHwtB1ReyMid1xT5YzDN8GzcCkoXDRaOJPoj09+hZB9y+p0MzSYht5ll7MYqbls+aaD2ts5XP2m0GnuyCB0uMXK54ZWutI6YKtJqV0wFZ4ky0kBhn0zroYrcIQ7j4PX+49cUDQu5T7kMXWobPqa1j8muE3rc4Yim71bn9nkiWjsdobRnC6M+Kyk06Sz6pBb/wDS5uSMmNsYNsTrfjMWlMdG0jyArMjBR2qQGIx7fw4Is3CGMeRkdmN726ByOQUSGJWvwAeeLYCasJ2ZmDXhb+JE8Ic7SlZ1ssq/wi8Yjoewwhb65MNMehmLDQMccn6VAlyqVG9ZDRPUq/wffLFdFLgSurQMz7GaPC5HRDnnRmA9u9veS/KJ+pRlD4B8SwPXT923RUi3rkG2M+/KJGTfOwbBtU6aOOioeQSBZiH811NlsDxu/TXzmy+D1hgMWbUAWslmIus606e5bhC4YOH+ZUNDoTZMX5rgCcDwq+3T+V15y4eV8wyE93d4Re7YNumqspWYJncws8Qn1TtrKDh1kqtH9JXSAiOHJNZCrv310z9/kxuOT2Vcd8pNKuAqPs0h+oQmu9AWig/NDEngrhDMQ+9t1FnAENF2XCYVoiMdLmuGEp0G+/8fS6zZ3ImgN8xbC6OTpnU/zOHg==';const _IH='97b023ea6147e2de18db10eb81f5043a0e1b1a311656e67a45ac47b88f7a66f4';let _src;

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
