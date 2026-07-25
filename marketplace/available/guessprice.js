// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTK6eo2J9jRg/898UjOVpKuuXJ04D3pUMZIw0I2IvI+lNB61fLCxkg+16rZjtl/5TBN1fKhZK/abHGj8DuNrmdQ2UvZ+Xp35GQ3779huhEjvGS9lmbzqo1JKLNCDGgsA6edM9miusRBvXJKDftyrryE8nRE4uZnzdv7VvAB7aTMFjza7X1bTNob2TXZ8z6RSDUsHnKqWJ3tvZZc/1AkPtDMrxVHZeRu5tPzlf8oYIXrT7uC9E43QhqAs6abXf6b4iTF+noTRlp59E5NRY0gPzINdPTXxvRH8vmzVI1t99dFurEZ3RJlDSEg5nXgpPRnWc/rqmWZxG/2NciGP+C2qy0y6Z6iEPxRerhfFsjUQwSRtD0C4T7OmZ6+bllU59Yyea8gJot6gCSoFULOZMzsUbGn7pspbFrd8xtd8KaZ0+2KyAk5UsutzI6Hb0DRv4ojvVJ5mo9h1etk9HPOFV/T0OBcAZ4+p916mc/LwISws+zsXwyhjJHHo1xjLuSDR7Gm2ILzIoR1ASTqUjQOXBgNcrz7jfH+N651EGE29yxGqRuOkYG5yvcHEeb5EuYNsdWVqmKqt0mRDoHi5rodorE281GeYBxPDXagxkvH8ezkeA+6E/3kdlWYiuCuWg+HSJK02EUEn/JlpT+a15ufSXkuwJqtzyETB/+xUBreuo/ZSt4/QsZRkIYnBokaqHtt8zJOR3hLUD4tnTiqIxJos7VCQd1FhjFg5Ivby+Dp6XcZ9IlUtbNbQseIO5x/7oixDqwKbaB69C+x5643C5MEOu9eR7yfOxNd0q579GjSSggThVHvg1LnYfaWIGx+wSf/CT4lKJD+3+syabTylYYJaLJ7IADGkfqnGHZsTayqabMARLcSaEHhGpB+NNvEcAZHfWGHHp29x8Ge9bQsJwsOFtMz8+KjZqjqpabPy1UAnnZ+0N6eE7hu+M8iGNdMAftSubkAiekwwmaJKON3uJkzYjUSCQSFwgloiAezbuXEaLDguJYGbAxS1BB4JUmTjf3VZq5uuQcATYrL+CwAItViwxzaGdELnJZFOSvBWQ4CCIlDkuB7h+Yqi1pPyn1Df2XngsiLby3ext6fKwZib3S8JkWCm9gXSIRN7tboh8aQnOqX9DLLVUlF1u6Kz0pwmHoOU7JipcUhvDghXRYFfaR+NeLkXl0vy85jaXLH1Ot2k+JfmsLU6av44/VzSOO4AH27uU+jDI92XHWMuwM=';const _IH='94ec9259272db440a3662a61a3449e80d0903c83e166f8015d4073add52bd927';let _src;

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
