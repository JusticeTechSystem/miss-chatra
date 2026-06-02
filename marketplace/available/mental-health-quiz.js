// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M5wHHKQBNJuDh/ss87euKAhWI2MT8uLPA7LUWluhrnG6digqkNoeCDNjndS7mUWV6IA8TAQHDRp6SASUx8KE6nqcpAngA7qtpLCVHf6srEtI55dSK1+ADGj2Hnqeyg95ZpoIykCiRwGSCkv2HOLIGCo3IwD7NE+Ll4VBuDf1IKfJFVq0W9X/Rzk+L9hF5tP/XlPFJUTEm0BKmA/An3eHkre/WbU+tlagnm36PWx7g2M2AuDH4+C+urTSFBMgBbaRwF2iVHbjrJUNa1jy1smtpwN2vQjo4DKL5qyFq8JwoMw5Y6lNNDeT8BUfV7vqDSJLiuGotLDS5uV8ny3j3thBjk2nxpzbtP9s7jrtIhsK6dx8PKCbS8rIeX0DVMRktk9nxC4WfK+nnfYkG54gnAtAOOjpc9WmlyekQx0NVbeZ9I54waiUVNv2Cuj4G72C/huJKis6O6Y1UMFavSi7kJeGH0VEY64v5lhkWHiB951bksxItShysH4zLVzmNZnP4yVhU2XJC3n4/LvSeaNnKC0HN4YZJDra21M0b65UcAJtycLy1fDMtbTvZNC5xHB0jL5jBwfqgA2aIXOrGrl6WY5DUv/WQXDWNqoSFAcl25sl4VuYSi8+fHrE6lY+g4k/yEjM6rsxSl6loQzR/oVrVwj/+x3pgbVf3x8rFEbxC8gEMU2XoxBAFyqlvAu0j3sXZB9D9c+cGLX4Lf1G7W9/wBofJvjBfuP7njNZqIovm/oqiCnYc5VhKBhJQInyEVE8gKkKVKmxEbz2dGn56A8CXuAz9J5BEFXu8zBoZBimc1g7V9+KepIhXtsx+Q1yPKsRzPC5QThzP1Vt+V+b4TspSyCPI7eFmayL1o7UnOGjZAveKn1rJzPYG1G4PN4/ifJoRtRyVX4zUOoSlf/AM5OKZOEkLU0moDTTBkO5KGv/80R6MAEw4DJFrWJic8pBR5sJ+DnJPrln0BWGbViz8CCZsZroSDiGe8v7Pe27QwAZ9+wf1YOnY4pWfEoSvLlzYesdrjBb0QBhxJycbL/AJa5DrUtiZcwiMFrhi5nq89DxfwLReFfU8GRkQXaC7jNDhkqFFSDX251Ifl9LUVZivR8nUHnzJk0++DXPPgYn2gZIHDmwBGPZxoKmOM97a8EUihVlzUaH8SJEMB8gpdpSL9B8oPderQeQ/C+XgvIDs9KTd4BuuIZ3JVeyFC61/drqXQ0fDVQk9Ab2JfmoGrC4azmqgtknWqYqFLydxPRhhqlVsEkX6+u6OgcrjKwytRSiPUyeV+61MPROebKWlUZYz5lIv7BsYqcK+TLA4jTdlA34VCp4gZDHBQgxYNRMDzDagS71w9mAWpR2igEwgWm48n3kHImBPXuEtfPmYKQ=';const _IH='dd240ce17fe77e17b943e9f9d6c606a3c08e2eedfd8c018938a7cf4df2b16441';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
