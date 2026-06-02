// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gVbAGXnqoPIZifn+6ra16kUnghX45a23RPBu3XvaEVuBXZcz5Fg0sjbAMOCnyUH8boYsYH4ZQpSXxpAZof/cOrzqXsBuqTMNojkAnzOi2iM+AHvs+3dqZR20hhlQGCob7IGLZHFLl3NCyvHpjqmlGypkpw/LyoYFqpdsQkZ5nigGU1pFFcHQOiJG+fsw6vSDoqLj4kXRFPbmNQEMEkM47miDqrbu+fDsXYHDHfmoiPvjVe2gNdWXkWjylZMuO9aLSJ60lsfp6yzAWhTbWkx7tcYdr8EOrjSaE74d8IiKipjE0OAkip+OtszSCc11iMRv/0DDo403O8vDoXuotfqzJ0kGJ7Dgg2WaQ1td8f63yrXH1xWs6Z8l1rcf91vzyt6/oC2ag4we0chwkNEmUF6URDAGThXCsAakS+icLtAXimm6bwVahkJW4a9yoSVkdttgaPCBANuDpaE5Yp1bWBBznqVqfVxGs3dUeCsHSef5Y2yErGW2cBC+Agf42aL69MQ8qIFZjFCPI4UoV5wAS64nCD+ZY2dtL56rXiyOGML80ryOqwfkffJYIVBI8SfGcvG7WJbJvww7YVFWoRerJxGThO8MUvXjewN8hPhKS6VZNtKNoIN/2ZPJts8pxb71peXnPoKDtpSJuiYMurdXadWfr9amUx3NqlP8AGOhkvAAJ36cS1nFmb9lWS5ZuWntrTQ0MsBotwJrpkyipOWHouQSdBwR8FwkUccBuiedca6grJGKGjaBzFqxpIdWTAgEzXneAFI09oNpRv3Az6MInwi5CZDTkq0YjOXU7bbZeqJSuo3c//XMpy2n8e1zsJr9Md1CPbHTXogpL8W2jUO+uXBUOXh7YRDZVPwTtJ+zh3WPCzvfgnw7K0yTe11x/pUSPeq/4SKutAbTD8K4r92MSIGD2/gt7WumeMfkPnmjRvo/JoN8pgc8kczjYveujBURFwgxRJbt0dujGDdGnidAcKFYjxe1bTpfTCa2+EGHBEjxUxBkWfwK5U7PMLWFLOhP';const _IH='0c161089ad54d6879adc25f090579357ec9f25f2c6adeb1389eea78d0a66195b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
