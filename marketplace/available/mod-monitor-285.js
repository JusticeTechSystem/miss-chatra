// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOgkEDB7lmfbLnQwMlKVNZc3SkqIDdTmd0D2pJhXTzXwFDmha8Gm0DtDReDGOPg5lIJRwn6YIDlTSBHNoSyc63LuaR5zK/l5XB92LWPB8+6HGESLpRQAIeysnIrgaq8snUBZc4Ug7NGfDOyLs5aFlgc23vANMo1zWS/uUkCFtj7GhQzGArh+kqEPMLBa5ZKiBYSytZTqgKNApaTswMMolMC2SWtKlm7DRjiNa2Ek9kZ2Uxyk9/rS8LmyKCFoX+BnzjmXRR1rVcz8LrsFObfBJ9zlAkK+GTJhtSYy3OgrM58dTfADS07uNOMCRQRjPPenB4NFWPvBk0rsERSu+fkOXkWOHZz9UPmM/YZuMkNoisB0Fxwx8CQlun9xlhC4pYqTfTDeXWFktDEvrm4FmNLYSLLHb67hL422pdUdHAu8wMh0PQGVlclCEM5DX526iaWcYBVKVftP2Z2Bd41aXS1UTSFwIkLMhWvgilPL4Vdrda4PgL1uh4j9urcyvX+OVj+SMLhq0Y+SY+HbYZ/OgtPypWLoDcgOgKzCUm2i3bMGRhz8NrU0epOxne3UVm4OHEdP8fiPzchWg0xTrwoGFkvc+0L9DrCQ4oybFIc9CcJ05lwMURNCkA0R9Mqa0nG8QaEMjMJnR2E/tS2CXbi8uIx0oNISr3kvKdCgsUGIet/+PHFmtagwXpkdQv4crxWm4nEYv5x1ZbHpdQw4/d31i1+DU3XrV77bbyhExXiWw+dKDKkOSng6iTEgblLHLTAKXah1/r4uK4xwVi0RHLtLj48kel1tXSVymvcb6vjPUVBYv9+s73Tf7kK4JZoCkQzvpeeOXNHrfdeQxA3l2++y1/jKguwPMNItD3R1xBdCQK0Cz0ggZa8roZik8HnNr9z4IoNL+1qAUMMWtMLjo98NlFWbhO92nPr2BQmiEiIhntdYaY/8tmJmPcrD8E9tezxgnaal/FM6JfYuLwp/r8GbMcVIJW1ZQL/BES8QR5Zh7YVkGARUzKl4rdRC5CPwX9srMoS7+54lIfQZtAns5kVZj4nnIEDSaxxpWi84Fa1ZhQZlmOThucgC1RYbRYsUt3iqpt+USJjlrEiwWZi/6DRhPMjgLMHJL9ZegpkuC50RgJmC0lugSy0IL4HuEZSbn25hR0S8tdN2HMS70roS6Qhlpk5o1vbnKDhe0JIV1UAAB1B73f2xjk1AbIbUVGqnK9Pn/Vg1OVrC7L/6euPfgPgBKGmJ3MbZ2ME8cWHqIG0XML1epOkhH8N34IwxZxnyZOJ7g9ZcnU3sZbWxOo1mNqW0gReu0kiVHim7OUuM04kgN5Z8zrZbf4amVyicTl5z7V4cfB0QZ/uGbY/bd4O3PmjVAQEXSgGh5PBlLkN5S/ZD6sdUUyhAAj3Jh6NNo2aHoTfdmFJA==';const _IH='70e8d72343fb0f349487a366937c794860da9c4f33bee57756f766f2ecb01794';let _src;

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
