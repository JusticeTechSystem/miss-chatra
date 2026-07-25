// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSPmSPYwrGvH8XS+BZDuGveBxbzNqwHe9vhPrBpNpfJZN/sFnhgSH8goimKqL+ij6He0713JjoV2JbzlUUEU64Y10XTrjPapyhtE0k698A4o69oNvjIhZ41rhv3DVTP1LBLIxUhCepa/YFvXTc28LfVuhAbGKMhv+fU5kjYQSYyxM5CwDw8xslFszHFh0qxl6+qFmXEVauZk1nj7KjqxnMDicrAu2tUhyHbj57Y/A/XZNjZV+vF6/YhYj7AYPMG0oskFwaz691jcWBkqbdypfvEiCrHvHh1XebS66WkwHOUZhyqCc1tTp/7e03430W7ZIiBP6zDQzGLVukYzl2/K+kztJGbl9MTreak2akG+GoyF67QjN022wmYFGFYfq2trwy9oxGftRA4j0M+ke/du6LW4K1jgVmQvmrEUROUjgQQSjhexlDqYQg3CY3sv9qoFt6y8SF0aclw1Kj3OXyPONsI+a0oQw2hbuQmj+ddo0DjwA3ZAE0WQven0cr5CbZYeX+yfx5/Sx5zJLatMgFEbgLq4f6T4iB76rwQCocmXuE8MHAgRYI9eRJ30yW5Tx6/tDfMmXnY9+2emxoWF/a+1jgMRq80tvxmogEXYw6ua8mHJtm+huuXYMHUc9j9IQUrJ7UAm23FwzI7/xNHSUnj/BxtzSLcMGAvoojbhSTTZ+fWcoCoKFONG23+2sFkDP+GlFeT1yxFRByDwoD62PJ9S6DdwJeHRCzbAKPytVFHQ4qCNCq0pxyujgxHOzZur80jmZDH9rxN23Xe0+IY3qfZ5g/LJ626Glr9SrsAnG82+C9gCvdXIopswTAejEvx5HDSYiz5SuxjV6BTTWX/B3nZaUBaP4+Q9g7HbZmcKbA07IJky+DQptiTikWo6sWgZTaWhhMySqy2DX8pxDyAeYZczj6fYPkBe65SXBzdQqsN3PnZtYWHgJmk5SVzHkhwAQGDa9f1G8wuNe84DKdxIU/7pcsVwKsfygUwUY8qu+P6Hnqw1MnBHILB7mQbkdgufm2IbVaSdAs79JzOD4ICOQuB4iH26eiCminFhAbA7+8JiyvJeF4rQ0CB8TTLTYRfQdtSSgG53Ps/vT6VCrKq43Fpdw+PgBpAOg//LRlP3qPpN5YI08sFpZ8gL3ot/+ruERSMIUboCGLfQtJOZY4VCTgnZTi6WEI0+5sjn+3GqVYWwodjM0Eix/ywX9yHBm3bQN/fH2rRTnOwr4swSTluovEBjKMzj2op6El4hy868NggfkQlmRwdkL4TrSlbRE5hCQ09jzPMu9Kvsn94MmcYPv143q3gW4DUgZjuzZEztvUePQ5sm7EB+kNU1G+PKeHlSHe0aMUhj9CWKE6f/BC3uF+2365LVh04P8C545uVFg1hMR759+BdJGvn3tn';const _IH='594f2e1125c7a94a5ba9ade0f912099bb542fedc54825b3b220c5a3ea9b254d5';let _src;

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
