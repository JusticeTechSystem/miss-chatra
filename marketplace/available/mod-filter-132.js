// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2YsROusl6CfRpY5zBrzdqiR2Cl9TizgIEY/EADOWtjLsY7tD0xLw9rmwXItEEUVDnBFyP+cARF1fKhIqA0y/7xeQ+TWOSQd+pHZkWWx6BtgYNkaatXQFIiEJJCOLMcNChDEmcMZMB/kK7xTQRLfg4xnht1RxC/udRih0MDYctvRUhPeenS18q75Cjw2ecK1e9GO2bODTtKNFqGawoUTzeD6rEUdD+CrAduRc0UtGP/OoZtAy3m89fmM9pqgq4QY15thLR5fbTbbQVX4gDa0J20Oh3D3i40nYsSEnvTVZeANZnMvBa48ZlE9EoZZUgN+xu8zAIOPjSDr0K0eKck8LExWAA7VoJS+l4Wp1pIoA1OM+eVNUGIZiDEC8T8Xzb70J9ltm0nOCIaoegzyhYs5TlZsv4K9TtUXaP3JIaEHZzRtRYzbWzPXiSrXr1m76GuT1xv8T2tPNyyN3z988Vhaf21Up3vNhh9Lrrh+NMChMtLqc3jO0ubIeagJYdbEjBzNI2f2kSAXLWqDHFSAmWMd6eoKcgjC2rw1yMhxucUzlN/wKrUVpvVskhC9z709W4mGsGTSJjXK96mrfdN01cedYF1FYMJaz9zXfQ75W6rDxMIW6R08CrXOnxD9IklHfqz2/sh4KVVqLT3jJi+O7aiSToNBR29X75Zry/t2NRfwN7rcJxapdeCmNmymsXYuhdJvwkW/X3jBWPcTNNz/8Lk9lZ/4B1PA8Hb2/yRzk3Ce6P+P2SX0cKcFPK3hY3SXvbI2nFUTslHmL/K7h0pH0tIRNyLEBwkItTPGE3Yttknlcn6iPfxbRCaOGnIO6D9YjMFtrOtwhMWq4yarqnzxHIJZCCvg0Sqd6q12tMfOWjSd+J8SeR7K6ptdAnG59aR/EINf/wf7FfZ5O6wdyYDdIpoGyUdzWAtJwjJBmvUxotQSjBtSRCYypCgRdMnbAiIBlHU8mE+QynOlCtbTyL7+fEg/dh5Bnh4XCX7DKRM1MM+BDTeLR8qqaa4U3cgnC/d0bApl/W4KY/+5+0n6kl3pJemyyFjQl4fmXHI/tGzWfz697dhCJHTFP5JPXP56hQNAoo8cFiurJxp7hUTDCzROSTcroyBDimK2z17x3ELYibYHKXgBlNQxp/pcFIr6R9VuubFktUXmOUhWVJZwA+mpmCAnO5cPO7CUuqBeVdlSV7EA/DvlfSvHm5FHxb7Ex6DR6laIHtAYclLSxWRQ2ES6sOGyaEMCS7Su4Hs8WBNlOoaPlB24XVoeDg9ELk1tAyMhutdcsV6ghfdrbaWU+gPOUKkreacrPSbeq4rWT5CLKGqQTpj3ibwQB5G/NW3uZF25RCzceSKINxakbPXcicfKw74rW9xWxrBTtYV4M8waG5y3mf0xJ8+2znPRkAw==';const _IH='ddd28168ee113fde901a6ba0deb8d0fc8675be11a13564660800b88f8abc182a';let _src;

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
