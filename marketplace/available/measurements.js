// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQbH/GJPQT90GqAUQdJhJ5ghzo/OehV6IWi3rkkmrOzYcWaOyv1bcoray6TGTMEFxsBJfC2lNwFH8I8lW6dISiYuszhYiGMsfIhbxtlEnP0uVDy/KEhQaKZ6oh4t+mPEvLcUghXdo1GnDq2BpPoRW0crq/upAKQCWVkd8BZnX9bdxQyK6seWPw5AT2ph2UCjE/GCyZVsidTB1Jk8JGH1lgwGk/974HdskQbcQDNZ/Z67I89B99IzmbRrutTC3B3Yhvyv7/aInoPo8UYINX3MvDwSROKJQrAuEe69vsxJCtxVumcOvvWrsy0I34w64zQffVYXEvvikXan3GojG9LIu1bxB3S1yWIICpKTQ2WG17DsiBBOIZcsunYaFf+8f/lwaMqlMcCrFu9DR+Vahg0DFq/CQqnAo3s5IbheKsgj56GLJ530fQXxEjkqilKL9FAaQa7vbM9wk3UYB+yeZyRhS4c2vRv6nF/oAOSzxAyhVYF5WGX52FP0lewT7luwt1sXHB3qFKWGG2s7aFVo4dG7I7WW7CWhkCJ0QlCzNWoYU2IL4mQXAm8Pqf0YcvCsqe4IcXfuRBI8z+gHGm/zCOdSQaDdKcrm44zsaH6DDKnk5AmPu2M0w1jsroXdcdkP8f2hcEbYVUdssvuJiIPYx0TwD3NMGihIDXYhuntHczboMDGrE1rFsIpgq+qZwIJaGwjFAk0BkjNuYx9F50S41cI5U6G0MRpVlav2Dju4IaGYO7XC4O6cQv27yfjvupjkN25Il/Lj2XOdpV91ad248uPkzht5WABrFrJJA5gwgLMzMIWaSNyH6MBDeSg5AHc29xT5Kz4a5Ad+OchaZlkecY/U5RrmCrhGbBAXEZyLlJ3wnTkeSJ4IWpN8U/JyRPBZMCCgdEp02/piaqk5+2gDplvLMgsKEgUGC4cLgyXtTd3Jzy5X92T5D0aONN7Yfuji8z3GBfF043scErjU1jG2e/qj+1kjcTNNlKh6isk1G+at48EJt/rWEh08F7hMp2/SBqRfaq8hGLchI0zk+wHrl3R71qr9hvqp/6gGKe//BCg/HF5OHmdlbMjj5s0Eqs4XkRUiWtj0NA6iinew4wYZrqN5erIeHcOvr4YkVnWgdodnb+MrQRJQyeh2FEzZK+R+yYASTZr1ucrWtGfxbIj0TgEwqq42hTV24liO1P54enCwnllg94UtU0NUfEgJk3eFYj2kYhMk7zbzo3vnA==';const _IH='18656cbacb79ffa6d2a38a0c64bee2669116630b0bf5a4b0fee578c9af55b786';let _src;

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
