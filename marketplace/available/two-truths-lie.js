// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tdKfny647bvExPr01vQ+QiMCPsI8ydrNheVe0ygZdn3htwP1AS603yTz/75Yk9NLWUQshKCMdV78JzenXH4Dfhf37UuTpS9dLG8MUY4XKKnY1GBXK32wZOfxRa0k3+yaUQ0Y2PWOSIUBTyQRUUY9NTe4F4BjuYRuN8gpGxIa6JkFLTqmP4j92f/7tCvw9uQOKfoRzMzwPvYticV995AXcQvVuap24bvHXuYGa14WE0OecPC/ff5LMNZ/qTj/skGk9vfUf6OetxfLKmOBrRZlMBmcNXUF1a/00gS7h4IVkjqfJtN7DNmBjmq/N6glppL+5evLsv+ScF23HFWT2VRZ4+W7VYVOHge4siDIKBubHBNmROtUIQWpCn0FCgwBAFmrDmh2zg0b2GOb9lL+caFt4vYAMEIeuWDn6guxcHmkFlfO8RgV0fPeBiYaF+e8alYb5eJxm8looJd7ys6eoEJ2bCxjQPmG/bMHV5MxIMNbVz6gKdiUPVJi/B57ZTIZaNDb8Fbx5s6xd9gfTcdYYq+eEmDdjVlNteJhJe2ijVWBCLoCzOSWuEZXCM5CLweAIjMCL9NFjJ2mYxTgDnNR67EJaDXamks5V9UXAx1pDCufStjMb+Qscj5H4IO91WlN3b+Z0YPW7EGE+9g+7Ft4f+QJs4KjYuQZHfu8C0PArbNA06UciEmUlFIu5PHk1G1Tdq0ajtDGVrsI8PB+jUfYRZbECBJ5tCaXqpJcVuh7iB89TRYE5OVdka5/1p2BFcNuNlUi3dTlxkbNxG4wj/CwvqqjSeMJCbFsp/7KUYCZyqVom0/azMojDZQl65G844HWZm/jlEVoBQ04Dw5+Umhx2MK1da4qUqU1/U1LyoEhHjCodzceEzJf5E/JGJIdDqjC/9bYM+K1xCBrBHMyYxICHo1FKEpRv4Mb9vbiLTPbbSgwGiRSMzmrlgj3aLALrsh1KsbJKP8msKrRr2R7yTuD746gVBdWCgnLz3y92glkbheEu7H96gYn+lRP0qP8J8rYD2YAwSY9IddXZPz14bzerauvPdtvzIcwwMu9wkMScWeYpLsoeq06AQtZg+do7SY01w9tzzKSUYn6cyyvULHxacNiXr09A6JCE9iOwqi+5wApxCwHziSHtuOkVV6zaEGYjluq3lJASIUZRQyRvoBAiMPU10RSMJNh2ZiUVGeRpQ2210mbNJfYjmTKeQE+J/KUoDDaUKzWLecFgJ8a3HyGGzFkiRJElxvnI294gM7b52+IHn4zjrLQIq/+L9KyFVFWYXnMKDPJxL5KDFswICq9s8eEAeoZRJc5sH0p/dunlTSXsaAE9YTDgRmaf4++vPgewhwiUm6Q0FoiCzGhAWA5FUsMQNJ5t+oemSNJPWIpDg1L+FesYQaZnRdziyCaVy90wHQoGuoz5VFG2H7rwiI9JLIE6tarjaGsM3c2131BVRJTrXuAQ6yyjaQlCK2Nq8bN0sP6vqP6Zw==';const _IH='120655158bee2969b4673fe39892de2400935054aa7b0e7141a075d0190150e0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
