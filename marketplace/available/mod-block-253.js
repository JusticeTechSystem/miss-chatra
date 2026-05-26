// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bkkM/XWRIU8L9YtUMSlvq9pesVKr8n2BsIxS1nRkoQ5oWnDz4xiGNoiVh3pt+OnqQoxvkwUnwaPnyPYkpwKIW7HmQtpU1FhTDfArtOWfyLsJ8lgMle1MUZ2mketn5Uvfph5Ty33ACGs9DoYrgj2lHadYAIeLsGAJ4HfvbkGoSWiTyqWZhl09n6WFfGuDEXCXSk9eQwz2zhXZKi0rZCslEMzB9nKYOopncn+gmbtxdckl8LO8DXo48VK2OxXqL96sns5bGXJV1J9Bu3aOMSFUvFrs0Bcg0URAsQU3Vqa8j4vwJqkSIBtpAIvbTII20AVzW8eKxzesQsZsrMPRFDgwJHvlSmU5MJsCHLNpO4e44GwtH8wWnMNhzXwa4ndhP3YbL3ZHP2MbQzmpjnMxQNoDnJXATSPI/8cn/IGr6VVnFuT70/kcVYu6XUX0rozJGpXrio35XaPbDI+rw8g6lxuMMrIcEMUaIbN9jJI32/XaEYeoxxq/04RnCq5af0Ipu7jvjs2yYzF/EOjF6DcM+z5pgDUyeBr7KtY1Ktzcwz9UXppXZw3+tFNmK3/ehjHya1g+fdOUGI2bv+V+R1ml1IGSNC9s6uFkJrW0ZYpzMKq7ALaJjBQkslfVrfp3nHe4mIqVP+Qnq5ANSsT66Vvoo8d4djZH8kn322yU5ZaixNHZACNnHZchuhzbgoV5YIj9i/zUE6aQcpOmXSWwra6hgwAHZGbq6P4COSOHLQJ+XuL4Igqaawcx+Qt7QDTN1ekFFJ66yNrduiZK2cLunzBNfdCupKbgJthqCfKGWnx1hZu+Kd0BCGali/6xMVSpw/2elKk/ZnVSohrZm9wRhamFvowPrCgDQfDp/JvJNqlLJStTqhUqLwmsk9PVOWqbWd21GU38f2rFfm2ERtqHnrSPgKdgCOXLXIzQS496c1Y3/DwwMe5KmuzzBHzY2mIXpleXZAqKGIKj3s+W+YVg9BwywWI9HoSjAYOHBwC4qXxX3oqQtk2i+tNiynHB9hv1MsSNYqRX4OgA7CDxzIz5cQVMI3iqWG7RWtdvSqCz8PuYkRsVRaTv3BYcXyJqmczvAHx+tKGBphQlf/XlEqsxH7TTgdWAO4tsctTJiO00SH6q3ICBioVuCd01H6NDjo76UydOZZROaD2WB7EeFVy/bFBCqOPnc15RuC/nZHSNHc2bZ8005L8o/ax/FfzC8OVOalXWgcyLzP/vP5d/eA8Oo5TVoUsiQqBiqDolASsUvYYRO3Pb6zut1LBxd/MyWv5GtieD2CMQ9OPYqBogcILwiKSaxKs9zfICPQISm2AaJSFM7YegfJloaDrDg/lSyor2lev3I6oZgR47HiU1q6Ob5ZDiDUdxrriLiqTW27gZ1JuGH1m6';const _IH='6cf279c94777c9a6ae77aea9c2a5d219317da7efaa310dbe6638443300d46d2d';let _src;

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
