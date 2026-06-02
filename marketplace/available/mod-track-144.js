// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eJkPYWF7yIHbo9yqrWY6vLyH9of2Ndz9DmiEfBRQ1efaNa5BD+fLQD3i7VvcD8F+qBgVk/a/XgdOKIaTb1JHSiAS2KLGYpA53shvcOIncATXvvaPHa+r6tG2at6uAIx7Oy5P3a2uvEFWUMP5/e51wUVsR73JQXqIuKqjcj0Po2UFmaIiUH0OCsY1l8239cOZFUQ+iVhbL3YWQXQ8J51llHzOl4AkvmjsTY+LZDMMgO8EdZhkJ7G75cYLvQzWi32ACC1IHzzkFH2TBph88lfOOJSQn8bcc4EfQHwES0DuuccbsMFJEM22JQuhWXYj6dUNZt9Di+s7XPAXjjNjWE3i7dFdRbNx3z/19OAXL8cHt5lHQk8dWjlFyiYHB6cuNpDVVxn6VGjrtfddYYGAlMRD6+1TNpZd7tkHEK5ZQpkzwF3nAniBvas18r3AiIRVYe00keIjpPZ0C5P/7Z9guE7cv2+IHgiXyWIf8KEJZMk8sv9ODd+NzY1pYSkZl1BmWqRaTUmBA6sPFI+hnqsOh5RekasPIWMuGhunREHRC43HP2ZoM0gbSza2TIhezSI4cSLovjwglTeFaeHX83i/IjUI5Bq1znjmnxyp8jgDLJqR6xtJ+jk/J5WTYD10BMV76dbrhL25+hKA3ocurbwKfagm931mm4qq+t8vjLUqU1iBt5X08Y7xy0Rj3JupY14kMnAyECRO24P/JtCBb6hLlezPmlshP7Jyfr23AGfbvxcsrXmxmy3FgqZrw/jVqBMlgfZv6IE3ikpsi6wiqhYO93M2vVpiTjqYcfnqpRCQ9B9FeF0Srn8P2pg7imEeY8URzLDxGW2vheZSPl4nuNitO7RFgonlBpGQfiHswQwPBnhUn1FPKUtJt2psch4cZirdZLFJYuxcNsWzd3dKesUR/8LRq4GNqdz3GZyefDRL/cEcrL/Oy7N4DBngWvr5s7DeQb7Hs6Yabsle8qrf88EFFzjyYM4Dik2mLzWQBBX6X6j/oQcnlr8cODj0w99pgW6lZhUmnUytOwQF2y2aTpH/gjdyM1+FsF1QejGjE3BMVJlldQZ9yAcmbXr7RMeOQzGwoUTtWAt1kzEyC1vggECjMk5LiYbCEnDXlAYbHH6WJoNQD311DoA/B84U9NFZFRgaZ5ZUJ+iaLvs6dRTgY6RNTmmLBG3XDM0QSC2YhJT7w7GyimgoMrLlPFcAHy/xLJYWNKaCGKS0IYshms+doKCVQU5rrnVxTUEFfue09Dp0h675v02P/m9d5MEXf4LHkCq9yqiS0jWKgjrhN0+mpTGJFfBuCzndbN+AoGWEfDyYMupLMIYB1CWwDBlWC21b8DNdBBMQYaTprxTBNj7zoR9H/Iwy+LPU3PJPJuC4tFkr9J7G';const _IH='676e8e9eeff7d73fb000a3aa5e4535dd02b11ab1a80ae0cf166d2f2e43288e94';let _src;

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
