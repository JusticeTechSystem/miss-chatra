// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SwRTXhOGduXu2IP5RvX3aeHLc/yJCSNyirZwyzorO2Kr1iaSHT2tVu4K4miYmKwGdaYXrhILmxI82ZexnVfK68b0qvC5sYk4ZBqZufg6SIzB0WXeswqgBCKXyNxIwKoOWMzpLYI38aDlxVg1alGRmjrne6/KyeytXUJ/rHrfDpopnnM/kgpo9XgztAM3tHa/v42tCqjz8qFhfG0kgN2/oYqxgqO2/yIkHiHXRe4DiMAHT2mL9zyRNLTIozMIguAkP7sdKoVIMG3y0W2XwmtNoi+wIa3nZVhvWhly5cMWO3QX6U+CCq0Zbukfak7P8rMCD8/KV76Hy6AlPAdvh8jbGrCCjlFmzqXv4zA4EeHLCpu26tPhr3/po8QJ6W3fM7+y4odb2xBQ/lL0F66hMbFO5oiyv4Qi283woZfpBZdty8J9ODC9IqfP/Ijwc4nDbhF+CJGdpXT556SpA2Msa60mUD9zgCW3DlE+AK8NUSsWJCANHoHmsahbVEdYzN0tlxuPB4UOWSheN/MK2DRk0QCmLGbhx6Bn3EIWG9Lv+scG0o/cusj+svmHEFRFsC+qbWH0qCB5T6MjZHZeSCHc0GMR05as+FvpJs2ihsAut7C6/uvKaPUAqG+//UC3ulPbETUh6cao2nkeTE54RLIAuGY08OLLUmq8MEU4FogrwsWDMQZ7dPHhQb+yJCncVqaobbxzZwSlsnpwNJrzKq2rbiJds9pRorE0p1J6rhpXXyXYOqnWKMPAW8BQJvWuTepbFxWZNP1w4vysHKZR2/PxMXp61iYUDQzFlaDa8A/lvu4cochCbOLdu8QPAqJMQ+F7bWZWUWi32eRPVqa1C4nyu0NuyoEA6qR/ySUK+gqd9jnDWXOCRJy7R/JUorITHYGprjVLS+hzBxyaYTI8YpK4V5+YYfvpaFKoA5Nua87/0Osk7ceCG9mpy8Ja8g==';const _IH='62b044e839155a17ed8c8815e68cd14aa10847f63b2f62bebda4c9fe728675c6';let _src;

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
