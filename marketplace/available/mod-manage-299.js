// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vbBagRW8o12+IqMc/hbLpFITTVfGcggT30rdsrI3D7KoC+s0sLT5b3xfvSH5d7FD7m/ACssBtJvJQElz5bPHiaqF4d20+BKaOgcLgqDnNmMOabIxUGj0pfdZwkxXC5zMkyfQlGxkRuw3VDpCWWPEXjsRG3pWx1ckO87H6R6IxFzVWG+TdXzCj4zsPaLUiuwE2FHrgU+iU2fdgY8k3Mj/fR5MVKnltknpd507qDVOpK6Ruf/4EvfMlKvNnHgX6QYwmsnHhoZuJTkVBEbij51W6jYhG09lbAbZ/TwjJPZ93X5gNzVhA2w8GaTXZLRqTKZqZi4uSkyeR3ek8WsU9NvpY0MnI0eNCQAvS2zNNFMjw0m5bg9BD5k6ebAHxt0oXmlYGit7DOGheYsda3ilKOLvSz1gBtNwmQ57sKIhp8l4m4cWxAjddfzj2t6pVrxmvnpz40Bp4UDFQoVSjlwVsfeWZO7DfFK136OAbFzPPMWJk+Hgsb6LiE1yvJH6kXdNyPoxf1SHG3+VBOxTOM8na37ZOaBjemu+FDPEawbQM4LfDqj/MzXrjLU+hO7mJUoHC2I2uQzdM0oIS8FVfSUK9aUdN2OwySn8hM8S710z/LjDytz0RZrFWYFlOEaqv8Nf7hukq+9Ndj5XsnrxxiDKzGX0FhQKFUaHkac2JHXwJDnl1jgdlKPiMTpU1LYmrPwHe1ADYFSTzT8mCADZBmKhbqALc2bTIqVLttUzcR0j3HNjjBf/SOWrMgHaMvuGPm+cHPHBeFzyTwDp9tCwuyWttOZBOKdtUisfMZ6L2fr9NEvU0FWxAF/cSpogXRQK6uMhwW6uAQM9VBqlbyqDGDGCHyyf2b9I3QXjCt8EEukzEnkiTaVHloF4dJo0nidI79q6l6TEn0Wu79sZzMKW5uuEnsNz2m+Jf0wCZSVkGkTsHdHrdgjXt+a3XeYw2hUROp+Ur7FcyDvp2IgcAAMbsBdJZnnZkIV/ga68aJdQgGicbKVpwQylQECAsoTTnVZzxcL4We63nmzgnBfdIWr50TVd8I3BEo+ujfJkp57xum3lWOHDFwlazGrcHeQ2CxI5Cm/CcNxvzOVOvUOWHoRaNT3tJIKBFzEBg0G5kWyjlI0XRxw4gucXWI77uwb9CdED117m2Wm0HCfRKsys64XfRa+hju+j8MYwA+zECUVClWQH9rMrdcbJN02iw7QJsmJTJoyH6FJfmDscN4nVS15jBLRjpfO1vhJBhIe0lhSuB//zRcZ+gZuwVfZamzr9MoUoPkcOe4iwN6jJ9ZekmZgILeLOOPEdSNsU84xeOYorGAahXlHzjspVAYxtFQ57/yiODkh/eSwY8UgGZTEIYGX1Fnu01MzMo8tq8qOVCIWK+xjEHtmlpcAorpaoWBg22g==';const _IH='7116804ffe0b5459887a7f52cdc78285247ab0f4cdab911227f2fc7266b08dd0';let _src;

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
