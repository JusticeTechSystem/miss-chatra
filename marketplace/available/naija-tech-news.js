// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MTJb9WERd7N5Tf/UwL/TT18Cz+v1OO06y8B/zXUhUYnfl7KlwZi/yOR3Mq83OvhAdCDZilfBmYKZuJSHxF6C8etOVz8AmfWpW05dh2fmHVtiKJdNFedlrAtSGb0X1BpUKhEC7bpEEjcMOO/8OcA6zJf4jYjwPbEGD63KGhbWZi6Aoss9iY0uI1cVJ9TQEaXsuQ/O6/xmZpY2TE0vEcQXm4PcrPu2r4C4qc4K6yh1hkJ9l7Lf4QVQlrPszcwD6ZhMnUI+Z0RvUKEeo3KfaNUsd+xob6yw/N/mslv7Lh01q/OSHDMNG9twxD7D4g7G9F5+QYF6xgupBqnyK4TBlt9LLa3oM4QCrdpP05oPYKknPVXu4Z0YtCLlhPUvci4vIPu2mc+cVGfnvJkRt4xomsRGaj9o+XRitdW1CsBuhs7aJIPwLcyY2EL+OhNTqt8Jy/q+piXIzYzHRzi4YT8Q1M/jH9Vor8iFpGS4mVMpi6vGSJfXaXIl6GnFD06CP0sg2N4/feWh1Ag02JPke62x3eGpt1OAWE2jiPuhw/aVH72HzTuHTyg5T9lhbNggNoleaHFwIMhHXj2CvIE5BayDKJczzqstTaxCE++y28LgBd+wX3VJ3yFonx7UuNHFKbNCCv2GqFx5ke5G+G/4bFc2jrAwepm90hrqyJTit7IgcNup1IdskmV3RH2KxkZwSdo4GnBMc8LngydH1d12MjKT0e7Ck7Vgmn3sna8384/AOpjfZGeQTmp+bvAj0hoerc618qhtVXs6JUjwrtqwXr6NwBUj+Yox0lW5JRqcjBwGWi1bwfxTlNHfQksLtuaTMY8HaqtEwQYyiMq3WFHQdFuAzTQz84rzzkmwT8NwFZMrvz2rlNbkspTg0skJKZet6uvgaR6WO7lE2c8z7rCARKafPF2F0pSwG0/Nata3tGuPVl7sIlP0A1SwFmIDJCkpnNs43fVrswlU2StEjcRi4BLKrvIWgbPjLhiRrqRQz2gzJBzy7AKpfpgzds6lcWULvQTLyjSh5t5MQW4aCZ3/3/YXo1GrG7WE2ohUimNkdzYwH++V/gCCFnG7Bq37vxLzhnbVSU7AZ3EYSglxgcDH1MdJEisn8QrhBI5F1EDZxUeY6FSAQI5lOZWIOdDqj89aoVnQ8eI4d9FuV9ggJCV2ToqbR5NqzV3qtmUnTaOK+ufiuBxhBeCWryZYfZGTIvwSI/bUq5JeAhNxSQB95w0=';const _IH='c1a91c2c1c452988238388b5cca21d42dce63110e82854051a9a42130bc611e0';let _src;

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
