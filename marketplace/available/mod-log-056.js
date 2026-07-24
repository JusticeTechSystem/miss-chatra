// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREEofaft2U/y/bWOShn7ZcRYEZKsyPh591ETDhNY5K25uGVn8fCJ/h3l1CV5aJODOaiiiLFTAXGNd0OEZmP9T//3c/8CpmSQrJKl+SYY45s1PNEpNidKSZqPoN2HhJ2cghIcpMtOcMxfI14WDJRFWzpeumhelVETvU4Ui2oI6eNTLtOU+QzJQReUooIO2uvmooaKHicyFzYPbtF5oZOALXMGg6SmaN0U3IqMfYrD0e/iwIwrKA+GMMqOM/laXCZjTuOHnO46zo/sIs/HarjCrODu3JnlgisAaAmyxGHVsIO3giSdWbk28JK+qOTIaQhXK9BRM3y/HGfIXolyTQnKEXeO18atgz2YWd4sglkrJe3aU+7d++pTaqlnLXXiNqDzJawVxBjzGF7vFACtf7rRzQ4LPoP647k7+9Hcsk/5R9N2RTrn7CLJYKiaYYTVrcS7AXgIClWPgsIn6uSmJ/mZey059JWrARExtmeiLyK3PPpAR1L/IR+Ax7EWKWFnUfKo3MgeNZQtvtE7sHJ0Bc7g0ujXEmO2Qf/6ukvqtbLWIdY8vM3yUwRd9bYMff5mkstQex8xxVpcywP2ycyHAIifOFpQJmGZwvD/VyyYaVT+OBNVJShXKzEPW9XcJ0qdMSOwQuzKep3oW6UxWAboGI0Ry+9OHCQpP+QkZ9BgOM4sdD59VytXMu+Jm+5v4fTNQD4Zwuy3QP+jguBmo+HbFNN7a4mg+itiBIlS2CAJa48BNIHwBSaNmaZtXSMsC0xkdQc48g7xLGtaOUQSMs29QjrGRpTQf3hmCj3TZY2fF/MfCMLWTf7BVQ/A7GUYDrTeXI+owMfk0NfzgtG+oYWdGkDHuAvzMNp16uD6QmgrsXglXP9ko1smXK4MXVQiUtVwQ4ZVSWIXO1p8ifS2WEzBdzA+LO3uuxTy8WRtdJ+hY3yEO8FUx3OTq0uDzALhvor1jSG074VjG/v0zV3XZhvfSeX8N6BCm9Arfr85Lt8fkSwbbrF4cz5gDK+4oG/7dVQ2u9bxfuBTbUlf2TzDsCPGdhr2orMDN+P8U254hPt4DYAXMR+jYOdrEpT0DMp/AQrteNvbl8/KBwoKaDwp/2Tl9TR3Y++hONRUma/FuPMkvJ4Ef7N8TUS+sWK67fFMttQHIEji17kLnkuVfwHQYCCw+DsY6BR+39FNeNZo7WPz+IVIMMH+9bh8HqQ7dAbnd1jJGu5oGjvt4Pv9nZd7F2KcJhkRaD6+xDiTmRDG6bmJFiuzNBUMRfiY/MdgUzxmAs212hljDDiT3bWpLDqWiNfk0036lLBaY4v3rMsLzARq4N3M/sAaUhjfU5U7ioQDrLWtYzrarvtTW9nA==';const _IH='68cdff5af426188c2eb40f7711abcecbb64a08caaf499ddb49126e4939ac4cd7';let _src;

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
