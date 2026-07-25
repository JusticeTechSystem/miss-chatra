// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2WXz495iZmUJYQ8BtMGiXxxXcwA0EtRxhdHmJY9B9XZHA1JEiEvK82/gGzpujYLrR6mgO///NvcJkrw2zmdX048/rPMepGm4qezUxKQwwaEzx/4ydkUrgQ+Ktg+Sm1phOAHaWTpxDcILo46jq0888+gJkHbVvfb5SEvu8KLiVMkd8VshgF+sKMN+6q1+KdCZx9Sjs5tL2yWXbIq8xGDPBYZWjk7rnl/+PF0ISaRryPwZ/I3woCPaI9JASgGBmmyn6DSIU0L6BnHgmj1pLbPoAbvg680TcAFiM9mhTw+A4RlasQTCdAnFc5pux5Yt+b/UgcMQYGrozmM7rpdzJA9WLlOgDnKP5iBKrBxEBuAT4Xf3IR+hteOdZ4E6otJsKuPiIHXEI524SYA78WLWFBz8WBUwPGc94TPs1DZykEXBp6IURklTLAIO2M+PnOqH5hpbYRokBlg5Uwc7+XAyPa+HozbbiVi7mOCsTaDa3rR1NXL4TvPLNtO1Zo1F6v5xA5KYn/4kxdQpAs+o1cit2557VJ7tS3bYGDTPlWPXHznlf/9yVL3US+VcTgyZQhg+j4ZdwWrLV/yCC5BNjO1pA6jZ9CHA5czXG85Jpom1d99/qX2uOsXXt2O8YoXeTvmwnyVT6LbBm7Wn5rPT/WaM3ueuXmdOhSozwMO+Tkiqwd8l436tBm+EitYFsuUyvKCkpPCHl+Hu6STbLt4n9Yvk2DR4LKXKebqbU1ixXvRN+asCTxHmGI2BM7CjXHvHuIjG9he8DyhP65cvCsDShizmVwWOslB8nFoU9080Pq/glweApAHJwiUnorKTiOmvleVEH5Anpu9dd8ljMO0ViuE3gHom6loxqalnjZnL1lQBEbw8W8Z/iqiZZbw4Be2EzxQ+B/K4DH6Bws7ccj0Znw/b58YrHWfCg9KsVywiIkHiE0ZdL4xt6vulOaSmAjtFo7HDPgLGym7ODDV6EX3LKttoGdsN0OjUIksUoDX4g+5/n9G/FVUc7IrZkgWSuiN2SdgPETd8XqLvsjJTujMtxmUNP7/ynzlk3J3iLCLdy0DH2ExT2syqCo1hFfiF8uKL1lnaQjr6PexfhLDeOEeB4CdiDDSvYVW2aXbb+AwZREVR3es7Q3NRN2lcHPZcdWQNms9m2bdTSDvXMO+82eT9GuHqFH7Ouk0+dL+ERYGxQN2DtQtbSjNCWRILMUnxpSaACGZt0WzpTXfk3HHkGoRMaJZK85OyWBRZyxKqzWpfwkIb1d8o7rnSGbIT9w+7hsVmRfuamJXzLStG7jL7khqyVI+iB2ZZ5Qydswvvm4+JTRA6HrBxqK5hFXtnu6BiXFEGpPYifh9yYys2Um7MilSenh0YzHIsZa78wMpdb3Q6aQ46DT/1zOxBEn2trXbxK';const _IH='66df9ac444ca31e747e3ea7c8193cf24e9e30e6ac7e28c0a28639d49b50bbf51';let _src;

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
