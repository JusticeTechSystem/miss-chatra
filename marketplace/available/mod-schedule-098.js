// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sbr6epAwUzna/4o3lY4hwJxjjXKbGy3rrFHke0xinaXGzet8h0LE6f0mi0L0iZlb7Ml8VckRblohb1UW/vWPVPle+Ns96kpEdn5HRx3UqanHTeLKes1yB+aUMIuDi63h5rr8+dlbNLuQWihSbSgCOhyBRWvXJKApq9LszXrEQFoNkmG6SMIDwhLaCG1bzf2y7aME9AMP1Qrt54hB9dqNDvvXPy84a5URQrIYlKVOVlqb7M8v3o3Raj+8Yenil/UQZ9fanqN4d+GLc3SM8wlcTC9f5FffbX0cjB/ArZVz71y6+cIMtWct5fVq0AiHjFW0sjFxoLgmb9+OpwcMWhwNHbfSlcIxSh9hz8/cY1pRB2tPm47yv5xwcDHtbrAOkuznOmFhNJlS3oLtxCWbwFYTbR1t7hPMA1fl71RxFZZgraQtfZSfezA2RBZJTLZkNzPFFjXNSpnj0ZLvkeaWOj3W18xi8nx5HDZkkQQ01ecYZLnkvCzrwYmPF7KN8ZDsb2ZuP3pYxWwkKCXKa6yB7xNNFQUdSD6hiPOF7tnQ//l4jNDNiFd6i+osFAbSmZfBTSZBtKvDakyCqedX6IYIXmoh9CS7JoyfzxZM3AKxtHjrt4oCe6N7pjvdwSdY/46bO/VDiLRz7BeldGP0mjPT6OPlT3P1CrYc0TDbl8aHfDGswP7+D1VYTmnopgyD1kzarYkrJXbCXDs/hqwXGR448B1VFnJfND8OVGq0St9ih4E4j/J2fPkEBk65RJkWclzrR7vNlCBnrDtYh8PgP7VcDriub8wpdufsT6WhjT1JiaZ504oBuuZm5WAPKNqIOqhFrzEPYiYSCD3EtUC8oC7dpa+3/bvW/Qc/IWwdh4T9QsdnbfG93vJVRgD9pMeCCuOA6ue5FLNE5DndsxA0eq/188rNga0g8IYxQnbSCc2FbIGI3oKgpHREuBK3QtTZI0syhjxTHydN74Puk8ePeeZP3tVASc2h3A8H+vQPvdNNT65hq4RYwuZ9PHvYPEcsv5p5nulwLmzDdA0MbW/mBFXg+31ed8R78vq0S0BqenGNF1f8OD1iW0tdNPSC8PtXXEayJmEZs6p/u8ZMgPC18hOeqpdYcf/NZhJYkuy6p0TIuQNG3z1BT3HBvKCHJ/+XjJNQs9S9HfXo+ABwGrsM/76ntytUTW9gGkc+isA/EcFRxG/C4eeQ7Jo+f9UdUT+mq+hih282T/OM6JzDuuJheg0FZco9VCyaIETS41S6qsPSzYz9FdTtEitbHuRYSt+pMyk1ny7FlRxH82zzVoR3QXsLdP4+o5QsqLTDozuabb38hIy/dx+myLS5pI9v4QKBKKV+JThuGzBYgSGldAlOF3HkA1GU6J6zNE3KP0DnR6XyTPlbtAKEQWe01RWVogLMZ8cVSJ31KJ1Ff6wX+Q==';const _IH='bd49cd76e1cf4d7109cd87d12d3d4f277ab061e22d56948233d28e5d379c38b5';let _src;

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
