// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e14cx0wY0T81vntvGOSkSzTlPewJMwij6pZwcUStWsnXeKZAlLzFbDgvCTOoJVipOXviMrYfDTZARZMVtjXIzcAILb7uoAlEz4qzbfmhBqLmPvXtcSaa8yO+GsN0pfC6M9VE2Xrl0BLW/Rc3OeSat31U7LMaNTXfFhfap4Dw5PQ3rwKGpaIoJOvKqyAaMLJY3PwAlOKGz7OrFeIszSW9nS4xxdqBHRLut7Ku0cxgbJOuta4b+GcuDvhpKGPetofpT/w0OGk56CfpxkhNjXcosElgqmdO4UDwF/m0+WAzLp3+mA/3V139/Lsv+gBmSyjVrFu7uQnxs8SPNXz3u6JE6FlRmL6vkpGgcuqjB7I90n8RA6Sckc3lNx5OCXxDMMoVD12hNiuD6MY5uufNZUWGxfjcHi2exwiA3nY/bOFyuFCxn7r3jQicIrt7hVac5XzP4/EaURMYAKXUk/7RsxikoCir3XP55VymWE51hJ6d7Nv3Bq5PKrWVRr0AHQIDzr4wyryPIzOpp/YNfkW5Nv+ABkFwkafKpTvR3D2ARJBBtpJ9NMa5SZ72HqDIIfwmMkwWVCaPPUoq1eTlQn3ezDEqys6WwHT3U/Ky3czTw00J2/9hO8pq7uChhX5U3vJB+m6HVo5TQ/9+dh7FidIbAJpWmc0E1DDp0KDBYPHZVGoIzru7qLkoC+vpW8RY+f/lR3g4QTNXkHxr5xi8uL4IVbcUypBSJURaI3tAOdYKiAiwoXcgwD8ZQccJcZRFLgj7HxS5xfuH8nlhIjlCnHCXVNyFBMU+o1LsviDchF10W5ZGGIagnBm8+2HDPJroQsplBJFRwzJ776QBGhhN8gMXi2bXLi139aLbqSZHQDfvriSQ4Kl6hcKrkEiJ1gEIEBt9Xevt+ZWXThINQiUBRZCFpOSojtMYfkgMFjqt7WTtGq1XDGvS0lCksmDD4JHDGqmbHdswYEe6SOepBtCGU1OfNHf1z6lCzljmSaeOCj8p/h2xHzsCne/9jGX11Q8KQGLoNO91mZ7+vdpjLr4ILOphXIy+qarVTida8Fil/Mh5bbRa/jGIOwGsUWj0Sle7usFJHd1RJOnVGmiV+i+2bFcvR/4eei9w3SLFDQavqMuUwhO6lbaAg4M/lJf7UH/NWsAV7NSwrfZXPwvl+jHro1vGkSidD8NN/mDUdrPAvPFROR0KzKmY54Cjkc0PCtIfim5hqinhSkGao3yMZkDFWOfT0ZFQgjOG8nYW8Ze4Aa2erC3wdOky2sdRLyeEgMnYwEqvDzF7X6YgGO56F2VMQbJXoWiWQjek6zeNcA6aneY6TxHnZcWEBiycAEMAdHlkjoS1u3V95WLwy+vuBcF6OjbQch1isxErO6uwzZjsK3M+QFI/xhikpc9rZWW5EFiVDY8YemaFV7s=';const _IH='68e9e6438086bf55ebbbb5c2d496855e3525f761f4ec0ce0d3805d08869347dd';let _src;

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
