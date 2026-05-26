// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I7/lZAR7g9xoxUnaIlPz1rcwAEw7CamLRmf4RUcsbCbghOKeVzoYPgJNRIEKqB1rruRWg6LqFLNTZF8CSjpPLchzy+Dwj5WbvvrbfhAIg/fimlBi/9XaW7KhfXwcJT4WETCohB90bBo5TaZ2Nk3JvWaUtgQAy7iAoIxly8kKwX+OvhCEdxPWnQhUxAk3RsoHy5jGqXeuGxpxYI2ZnaRJ5xXCbMWW90OJ+SL87ybdc/c8QHXft3gD+z1BYNyMkd57eJPtkVR5JAjnRrUmw18uQsW9OTaS7WjJOUYiHV6OcWcr9wQ47KiStgTrEO88SUEKcy9fOaH6HiU3outylOT5GM93xqewQfzXN6cpcqfVLluHPsNiqtiMLD07lHZv9wbAnbmtZr/vS25S7aqTsenu+5W9X75YJlLNbQKgRM8LtqVu69z/wqKlj6UoPhBKC16JJR26WmVvUN6MnZoIkGs5hICDff/I753TLpyMx4V9tKLM3VTLFTpfhybjzeuhJBVz+DJ7QFgapNu8MENrdpmOjrCcxv0YvyBts/TuP3zr2jC7yCBLC373sOgVobPRJVndIDDBfLyPSNh4ckfjaM/ulp5OVZRoootYYYQqqjKLG6AcVyFJYenCIKAt4IxSMJWrf7XiU0p56Sh+5HNDQq4vJobtkcKK/M6YRwGlL+h6vLj8bU6Rid/7UYA7bBRu808Ac2kqsFPZJQFT60DErjX0mKTwGcXAUQHmRxWobDpJcrj1H6iWtEJ/zT+VJdOaUM3CbJxkNvlaSgoBkDUMDClu2X6hWM+fpqutp5uwgdyf9pvfWN/19rJmk9hNX38gMn7lZ7UFDYPI/Js1DNp3pavJjxjsG6VYWxAGyZSxWNpdGbp/1Ku+f+TT5BbQLNXiMsFRxlNNQ3wWhseNLHdPZC7rJBgf6Jy8CnVbP1obWmJn/BBZDblP1FC8L612P/F9Wfx+fp4Pi/1XBRZF4sj2GBXsbbQzc2/qD/nD7ZMKRPVZVA7xnJZfyvfIW1rdMWjvRtoIvFrlWrXkhVCequczYYm7+vKenSwe5TxWhkKrdMvSCXwhfn/tjl16y9AhmVMl/RN9AufdV7V7ttFAFlVKWwddjBxZqsxphJaMVgGULTFEXcVt+VnwPxq6eUpneDZCtTGa2GPynR4q+D1JnaTtYduIl/Y55meWSWgBaJFKzt7qojw/j4trH/qPA/0rGx2ILtjYxsBcb/6iN5Vw4kFrr5k/U6CxyzJIsBISeEc7jsIc8U7251f1jlGlfi9MFAM3d2eZJnV2eZrqwApsGVLflN8mxeg0vR2dIp4OK+gtqicZ/hFljVYNIahDHzGIvsdF+GkoSVU80ytvXkq3/syKHu44ccM2HuVhaIRElNmueyi4lEhQMkY+gnkltA==';const _IH='f3288f74771c1493c0530d481b4d95948b542b4f6dbcd2770fc7e319aa778a24';let _src;

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
