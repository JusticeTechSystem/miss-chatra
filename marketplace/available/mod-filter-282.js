// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTh88mCVDZartCHG4TbHS8DlxcX12PANJMwnUEmAJQdnlbDDk0L4TCSr2CRERHXi1mmT5y3xhcF721OeQ25PMcvcTgIMvbSjSYAcDZx6jUvPd8oNxotC1r5rD7jH1eNwLwo2EnnFuKKEAxu3LSAv8nvANHPeT6d1LuZIBqjVgJcvUUp54szRKFBdPxEURzktqZOeuYDpHo1imJv9ujk+W65jJi9dD1egYG6YZqddsDplH1inhQJ+2unB78JQgYFoijaKN58VZC0V+gwYW0eOzEDCIFmD7thzZhK3irglLbVNxgdgRv0RQ9KtneIG9WcUEBgmNYcRrIc8OcOVhKlL+mSovLC6DMq9kBBFq9Y6V/pQSsHnCdFzPSqGZbnX4R87OGcOOcAYOkLDGxlRRxUI14ib4oPKWP3h+ShttTJueAQphpgnkG00hJEI603j6Fpz8X3U4FrTyVFyWtewufzXzYQJ/a97j+O1RQgD2aghZk7LP5hkH5C605LwMrGzRZedEKUJdGdfuZ6Y4bk83DkS33kAetLRZt7UfX+BVRZeG3nXJQn2qMzVc5hs5mLi7qF62icR8vqTolfltVCZz0q84TTM57AVAiQEUbvfWWv5l+NBiE3V0Fc26jrX5SDVKG9heyEwPEprAoF2ugohQu8ectks7gaZ4lAtFk+IkjIt9P+6IFQEPDZ8RTR2Y6HgK6VPOYPDlK/6/JlAkyoROBxNXbPl45bZrCdNyVfxmKakONIg3Bix0FeLQPUwaOYGxFUjzgAlPPalp0mgGR5LKUDtuHr1mUqshlbO7G7rQOsYvUuIN5LGTrc5ufZHHZ1VnWmEQtpQOJSfkd/baR8r7lqSMRLlfxninGrRCZwuCtA82BLMgIHTFE1fVbdOvTFZZa2ORCxekMPfwkc/t7+oCaP1HzKj//+bVMX2bpE3X34W2ywd/1CfebEXWymbl/WWO5gpwmE5QzTDldNVAVYSrjuif65m51WPWOb3OF+neNBA59c6KTZ1DfNM8UbJyRfP+27nWOeRNMQC2PSuvyxqLhonZ1AOB206QFrsCgYN7aSy39RAmYFHGlH0S/gIWTDsIHJtPv/LBJRBSyz+amlauYxT8pTWAszxwaMOxPAbGfuooQ3BCD3IlN1JV5cXmgYxabK6ECbVbxw39mO/udx/xXz8SXe35wC/TLnRXeX/YHgdvokJBojk5gTYKHGKwaz5v3GdZNpePd6Dg4I6V53fHD916dufJjvYG2yBFnbr6aLAEGxca5QkXCMEndOtfMQ8LCJYk2my3JGA8I9AZqI6wQoDl2hgg/5K/QukyZqUf0kwXUvQUKn9SpC0fCburzpGEhyA7jl2PXmMEKXr9FNRRj0tIOVwH63qZUdqsnZulTlFX2CYQc7H0FBmZJj';const _IH='89f2d9b2d35a975993d4eb35b91d8784034b998c1369bd632cb781b76d670c44';let _src;

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
