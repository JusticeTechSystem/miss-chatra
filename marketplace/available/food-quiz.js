// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRI0b9zmH/o23wkS47Hc/Qwq7KucBMJJyrD6ToiV4osIA6QXBRXi75DapAGcIshrNLmq+GMmAjPYwRne6lhtOpJELwR89SasxCY0OD93ZrkSHiwD0NuWG5j8n5Quzc4reY9tU4fa4AVqll77KEkLPI7PTovK5yUvjQivaZgCamYt9YYbsa3fh3hY7QTzQuFKpeuKep8IepkEZM65E0FHXqm1DJccpj/0wcCeYuiAOWVTJM4hEJMDiqCcy+QWI+aI5SPZ/J/Xlmc1YTmZO/QhIiodotpUoxCVLHJJNBKmGvAqCdvPbpQjUcKw2gSQoIn4+IRI9qv4RmSimeOekzTYWNxzFseXrS6g0ERlcVZImic9n7CehWZK+xX5+1S4y4o6auCSJeV5g+T19ZS2mAEJCFNlnoifs70ybXVQkpTPUDkzCL2jfsgkL9V7NjgvjapsInMabMGpXKaIrFjoD7Km4fYsLTwCHPcvXYBUJFqpDnuNmcY5ymZfaVmpYI892bhmb8V+cUbBtiXidw7O5R/7AaXkshsmVGmI4ZUguNyZo2OeViEq6PxoMoGIh60no4YecwmzdsJlFGTPDBECMnMkxgZuEk43pJ9jfdK3W1Tu/WTeZDkirGwGC5aUmWk0xp1TybMGPI/Z+XFoTNy60JLYr+efLBsoImkJ8XuXzJubh/E+ABfQbl1YzumS2IxNC5POk0OVbS+JOPczMkq6NDTUluaU5uMcT8zbfty+kmWfO7Ptp6JG4UfkybT4ta89voM56gW7dEA25OZVytfSJIyk5GWZenqzOx5c9H4T3JstxAb+/6Ap7nc2PZEiJbC3cI2gtRLL2IjuWFILPgHxEDbBjuCnmOoInE+xBEvyOcZGbxP2p+S6X8iRotDE7iKoS5CLttLPoXuoSU+cXxmD/xZPRPTdMxSbQGW6X2rb+hH/dY6kRBhJeMZ6xW1GGeXo9dbZmNFDaPclteNMtEoWSnPoala0iMauVcfV0CqXA32sM2ledFfXQN1ichMCEaDptVkOED+CQudgOyRiaRPkMzn3FP8zWcgBmRmMvsCiJs53Q1vBxIjPaacnY1qsIjMMV1P4E6oLTEieSmbk5w65rFEvvtTOgUbjMeRtL547dwf1+RN21h8juKYSOxUaQTaVWaq9SG7v9UeyVO6rhUCUiic9SNfsFflKos0beMRy4e70e0y4dY7YQfeJEEULgYBjaUriqPPOjXPjM+JBMc96YKZ/t7Py2w8Y6An6S+C8zIiF/v7lZVslZWfzeh1IgDZ1VK5i6SRa+tF6lGk2bHBbZnz0FuOJQzvt/YDBNK+tpSF6egO3NFE0e8zb2j5bra6ZaQcCmbOKHyi+/XkTZxYr3csWUvm8XhKk9F9sidQ4gi7NiXD0orsMaU8TjG6cSiqrZVERl7tsAFsMfUjD7l6ZlAq0h0nufR+4N2BWcJi12DS0+08epof1EvM4vUV';const _IH='77ed348b383be9df0d66d4a2e60c6918e5c1a9542f5fced58e925044930176c9';let _src;

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
