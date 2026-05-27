// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VnaU1AQ6ZZsxSm9vy1xGwLf+wJP8Vxyb2+DyqlJzHdoQTujAVnhMgkU4XwQ/SGCGA1/w610WNp7XE1bQQH4B2FO098aSsWQVnOAujAg82IX0hNjLXXlu9eCNVzjtZ3OhXgXh17LPpKng8weU5OsbtgSyn9JuGlvJLIIOA0UWakabN2JhNwDeGFpneYmfuOw/baiAGb4Xy3ID0z/rEFWadYDkmdgtoTeflQDtRnsnnLWB/PCSYEPzvVsIBZkY/mbYOvTLGOceq59vIZ7Kk8yPiDuZgnJbkioQ5ypsAVaAOd/xLStBWe/6Yx8ojZFVRAQ1aP/3EFwRCX2SRFb7CA362fuNWvRQUbm5ZEx7GWOEvbASHBBEIL5/heNCJR0Iz0TtOpMmqXzfcBTACBwGuQOEgYK/oHOKQY5QGx+5gNAEUoobernermARGtbStcZl/9N0ksjqXGhkmNgu9QDrLFGz+5TLSEvHWRt/9jeXdg34CX33hjd/zhMr/tut78Rbdqcc9abK8bSWbO03C0elYhU0jVhvHHNYeRzA8LDl017GIGhV1AdCMhM8KL3f6RMO02mRrStECDsTBN6szv0gKgG30oX5+0DTnZ/1/m3vqCyJfJLI5QLn1GPNnH3XQ+9INTfLtcJmq3X8OlTJX7XEdLbZj/ZpobG3are9pOLkhFf50IgjJNb3qAI6emBMxqUczSS/W2d3uzyXs6JvgA240MQhgjhesheDhexTCVZ83IhrFdB6HeS6V02ZEZkL03lLcv6KD3pxiHMR/c4LNNSe0eAJe9GibNKu+Sro/uGnIYskSATmAcfBpDz908Z7S9CI/oKLSYJcLZ7Y16uNTvjD7tvyBrVGvR/x/3JxXEQKf423IKtxMpihVslN9QaWYC7nfh7VZ58/3ACI/FN5mPKNSxY02BlBUxUhRR7yZnGDwpg02UYxoxk5U80iochuXIyTUlaLy2GkLyD4FIz/MaqhuNE89rK/Lnp3MC2osShXS+EARq7iF55RSc8rQPgQQq/uqW8JLba+YfQ8WaBjegNeFpX9JC29vLEIjrqNl7eOu2AOZq4otJth1WzPThdqwUtTdS7Z4XSte1D6gtrvxlRAc/+32LkByL+HUCLrAGEEqkzErus3Xnc9dGr0nb47Ezo5NGN7nLUqrW3/b8rn1XPmu+KWlFrxp85oki4xOZMBXh3xuVBvKscMyf/gvmDq/QSV6NrTwNvRkm1jsy53n4BH1pUkQD8at8kfk5pR6dcmHorSazWUHsbmY7ZCfH6I0NWxKY5ULPKf8AR+UKFyRBZVPzJXzvzqjarQ/DYlQX9v6jJs/8a/vKwU2V7ibXUKfGvksYro5D7rp3L/38sRzMLC6IaUIdWUM4B8eDd3HT7ccI7Kci5KlPdKyObpEg==';const _IH='de7b43ba8842a565c2b57f58ae7f87572c4085e2f80ff708c33772d84217e6ea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
