// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfUBId8GqvIYOAvVErFkZZQdT4jB3YccrJLc+qVG73IwVm6QC5w2EuR/NEVb0r1MvpirQ8h4zX6OVVTCesfopAZq0FrxXWi9uD6dpn+tOVRqLYrCiONfw7DZsdL45ArCOv6CKruUnTtEPuQ2cxppex9Kinl+E43uery+pfG2B+5BwtvTE0NAJnIlVSSGPMmUFV3ZpypNVrhJkLHJSWEGgKM7cSZF6ZjiULI9RTr9bTZxR+aSBj0uOcQk+473aRTf3ohCmRkmUmOLSSn/l61WzMJ77DbTnwlo3Owgs++u3v8I4vXG8wmgr/YwFzJ8ELZ0A90OP6NfnEEJmC1UVrI+wvn4jz88XWpvoEsH28hYWEEH3rgYGgmsZdFYqe22p1WKJ4EtQjrc7syKwGPTnuof7OnAfTmjyEQnYlzYoj33gsW2PmuR22Hdnaf1AoQjGsncnXEMzRYM1q3sMVSVsZDMNCoCigku6CDmoa60QD3iAqa/rM9FEDkJ1UUkIgR/vYYeD+H83kGYtsh108ITjlZEf0gOzMSWIhSBwiy2op6Uoq7qc7OoD4Q8BYhOsB3fL8Tj7KasMEaooIt7YBjinHDLS+PoLoMlJpssOXyttFqcGvTGz0+tILzGm/vpHhmHuYAyo5+7PkMRqdpt0EOR1fcRTYhnGeUTCv1GQfkU3HsesZ65VBafMBJav7uUzu2gMVn9qKSr3zsVo0Qkvg51m/oK7hCo4dgFEkmdFgWfUqAlk/4A3WqAiyZ85fnQe3fBICtmK93Cu4jFC9/Cmh3lureaC5Elyn2r8KiBXP4fsRjxF5gyM0y7k2+FJm2kwbUfFWSBNXtmrX++pTJVL3Cg6KJwO+E91+KVaxNq+GPWBvCQj2Hn2KHgTylo3vJfaIZE6YndWzdJ3QUa4qUkC7EqAew780uiajkczGYQB3CxTMWKKwmrXEVpvdArguqwLdVQ3ucdjYZdNOYD8HneGHmnhh9bXJZfK67+Yslcx4MTl5pObKPf8CF5asJIgsSW/PYUBFRnWSKeKxU7+Ho7UpaFvdiFZcpmXks1/M9vpTzRC9HMES9JPKRnzoRBBLe2Ag6rNRcMxWUVWPQXUrtnueCG9yic4GQ+Pb7Nql/7d9IuvUcWMGughrReO/pH15E9p/fsQhAFWZijSRPcm39Pi+4LgxXOUQuXhN+Y1ofnAcUzHnXmEI9SJEydGTqAlNGBQ3oRBOFZXrDQ/dnN6H3wJ8kJy5ZL4kEGe0vE4MnNtOYB8O1BWurCx7qtKvHg+JypvHT/JyGnWsM+4eQIwF2yyKRP0tlgGoZdEeAtnoEmKsz3ub/13hQuwb45T6u9CM4tukN6Bk4bkF1O+mNXq5tWgsNz3f+gYA25v7W0rbKzSi7Ph/yIpCwulQpQ==';const _IH='b8434935af5859e5f0cf4ad539ca5648d9eb21a8c0ea92bd96e7bae2815bf772';let _src;

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
