// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WfTbsvrtF+frlg5frsW9HIeg/xVQbc+aACF1BWTb819irgSzDkzMK1f0kGu6iQXRAX2gCAb0Ovb9YzjO8LW8rdSo0cmmgWrh2DqAg9z/T0/L12aP1sbBDaF+AOPFkSRqIZARTZnByXgmdJYTVy3RDmFi/O4GOFbgi9Tai35NUoRU3CypYAMgtNzSvtxkfmGjSo4A2zaprmFx/lCN6N/DArDAkCw++sG9JErFIjoGTdAbHM6Yst4rJbyjRGkL3GJo4l+I0sT85B0cvmnx9ug5nRkK1uwewRrtgvClbZXFyP7yWr57lBh4b6Mf2L6CkitIkkBXQt7qCJ8sQrR/bUd6YhWXs+vcrmj7tzSzn7efit9MQiHHtc2AyBX/AE8lDMdzDU9+vCbo05TFYDngeb/woWo6nlgrqsqkGNkf8VS7ypI1MFuw54yJTkKaE0G/P/ea1eoIGaAbU8s8nZ0qfdBjOOptC+q5+hParQ1pLMeuHzHtMcsN+BGx87Z76bZub6lPINNd9N0z8vsQwqZEPqxEYDNU8ACMZs8//lp0t+p/cEVdYZHa6dq1xOl9/+ZB2Hu0cQkXNtV/TubCWr8TZqup3CP93pXU2TH/M47vlmoJYHOGJdkEc4vSy3kOV1FUVzxi0wYACA99B5piCN3xWfmLzCNKrCcWHSbNN8AKLSmpUtGd0yuMY2D/3R+3ptEEwQI7vlDCJfc4k/teUpvX5T51viLwMDi8EvrfSeR1JDnOn+aYCULGWrbx643xfaowQTP1RO9I8EhwfRLMCsH1FmdgXLDU6IEOZI7F1zA1PhKhlSc4z3B8T5OSn6xumubH29XO16AE1mYQq+9yukgqD04VG2cM9j06V+KfRdIEqEFPyOErAIWctbLF9L85yZ3x7uKIDHQu4rbQH4HqXNAjUQDJ4O7sOBL0QEJZupHEgZy3L4nOrjZ1RH6FBJkAvCniDIXAyIbQa+Jz5OaSmcKeL9PDIXP2afl5BUhRzXBZG+DmuukFL6tJsd2+oozqf/N8FVhcWK3LfKRAUEs8CqL7djahsZmcanVX1Gg6946o+r0kUb1m2kisSi6GkxV3a51oYrbuNQ/DqYVVkjpd29mUwFW5PafbNeINw+ogMunwcqKp1MG2qMVdMGXa5uYv8flbNMgOiq6WB4cxIIHh2m1CIAuNV8KmO84ZsLaEwslObMnwgVKfpJCkbOVazkSt52/Vu1m2oyd1+Xv3+6bno1JpmZyM61xQwNgzOAxnlGl/Bg==';const _IH='a923dae1f97547030e83fa9c19ab291727df0af6255b270a4e2894d1f25b11ce';let _src;

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
