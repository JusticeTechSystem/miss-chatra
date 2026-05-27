// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R/y/UU8nirORbuI0Z/QABRDvVxbeqr00fskWWik3r115fHFW29z9OdruowT/dSDFL4GGSZ4bP/Zm6dlJWurk07VUYf2eczyvhIe+74AiJ/sZpi4ukDJyekMH60/KAErobAIv0wD6OyK2JeskBmBj7aC8aqI2RXGjbjBkSMPsT3qydilE/Z+E/7ev6Rx6kLrV7rae9MvHtv60SHlQqkk/HhHMvs3DHEDFjxPntbO7rYVZy1HicWRFFq8/eO5aluQAOgc6tNTfV1aiCoj58D8j3ni+0LracrGSQn4dJZf+5pzLeVMAKNI5IBHirftqhdDYzCarQdX+CmlOgvqjBhaDZZYcqWxLfsKVpANUD1wEkoyLv1TKDZOhJL+FFxRJG8Bh9NtIOjocmEiCZiER5YpKo+KoBbbJLGReW/8dTwH9nL1XvLNMA2oaNeWQhkvFqjFLDmyn3Ssc9mFL5meOKj/DJ+X/o1kXYWuSKUP75SyXyAlbXbYd4jee9TlAA9pIcS+ZUB8+UtlExtEULnBiiaekd9iyIbHrg3RK+lZOxTeM8D4e0qHeALLKOf1dfE1ixVHtSoiGFAmhXtjKCad50d7BG7uXMN+0nZLD/WxzKXZnjutel004MBA71YIiGcvljWcY2Qjf1I2KkiMqPOueGOvSJOb7M0m2ppiyFLBRFqLcuMPm1ZY1Y2Mx5OFbo+NN2mds6kwcxZF+Gklu+PkkSsnwblPFpwzvcZ2rcLlBW0ZWyQUaGXkHP447zZJlWXJz9dnECSyZYJtbruvbQZ7T8js7totQ4wJxFiOZMQ+7trzmwGh+9+t9iLdhr/cUEK51e+e0XlDtrsJwhRETJ91fez8iOg+M9lVdg2WveaBc4ted3id2UYAT2F/CVnlPbts+dYfZtb0KVA+HM5c+iDa2woen7gmpcdQsQfu7DbGe6HXHAkoz/GExilqk1Sl+fEuPuHakJ5x9Mg7cT39aA4nQn/99fmHjzEJXRR3ykqLCQUYEONj4qK8G4u8WtDKpcO+n5t1ejeMZ0NQYN9SHU9+qOPKJmrYM4gVOv6zrk6I8TfGtXIq01QH/AqPRmFzycKTs9l+X/ssrQUC8H4vxUbayRkcdF86UwBeXjj30pjkWs2k1ZDu/TLYPk/4fZj0hqS4soP1bdSERCIImCHhUgD2NYmxVYIfKVTnBECcFGvhs2JEL2+IPySo72HZbuZ7UzofgLgXbFiURWs2nSREjXIgQAq6J43n7LBRqiQrbbHxnDzSNbv/lNLYpb9OtuG9klDRQZvynN6FegX5RMFD//9NH+VNz2i7uYl+KuvnHCFv9GfqwPpNbXMFkmRUwu1LdDik7PZQ2/olscdUC0Nsa8ecdRE4/mauGA05dwz6OhvlS8jvMSBNj7BU/N0w5Z9eFne0Tq6I4E0roenk/mG9+Ey2QujeLN9++q8SRafR+VAauX0Zh4Bz94U49kwCDsozhgMauswmfF127lCq46eb+vD9qfoBEphkDFGvdKaghbfohIDnjnrSP3K3N0am/b42YM7E2zd/f4jqgZ9hBo/uU/Eydz5zOPVJT2566fXtv4+yKY7/aE6CWx3jDAgAMstQQuc8JVBONNVY1sZIUW36Urud9W4yWOYCfw9m3tEyO7/8vig5cycgGf6iFDe82WHE9X0QAgjuNgmfO53n3RlUxLFQXlPFGYN7rWgRfzX4K+dxuvUt6pnp8/aurDCbJACNwiXIpdE5gclirEiyCtgoG8/l60BW0k2YWemCtLF6kaueNpyBkZWpzu2d99HM5Zf5HeOmeNvZSQfrC4Q4602j3U9o5UVU3M6Z/OKB6JtVj21lalfQ=';const _IH='6054041f8b56de689553bad07aff9565328b87b87fdc565c2d39bc459a96e82e';let _src;

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
