// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0kKO5AbBQT+eEYUWDzhsigbBf1o8Fx0ZDfrl/OhYryPkc5EoidVDd6OkhmeoN3IR8ZQz/Xy+Bl91UeTS3bPEL7EM5cEZy1sDXblk+Q14YuCpIpkfeMt4yEb5wteaHbvNwf0IW0H15nW4PTYfETPdX0dy6YKUGHJ1VF4+vlzL1nHo5khcNOejGtHEG+TfvURBa6w5Q/ZJio0Yragq8iRpX6yxEP7De2e56ZdQjvkcHVL/fCpSpEUl5KWQAOSmf7K6WD9A+Ru4yngedcGuGF9bEEqCIw+X3Dllh0n1LllHQoZp0+gFax2sEZ/LYeNP28P8WYeICrUCaksEDE84FT1bhZpk9nd/wZ0tyZmr/oZwUMEmpQJroIJgsqjhSOroWOHCPiUbUSh8DwETAE+Qlq5LWM/0s6czy5gxyrItlw9HZAaQArMe8OUqX473gEkC8cxygt9shHI9+tW6NQdGatJcD6uSrJIEcWWxTjM0UdVtxUFk4LQ2miA1fdSHy0i8+zgVLlSvzns7wAtqeVvz/pr52zgeorqMcw/7l7fsT3FjU3qQ4E78sbFx07yvWiyk2VGsvhbp/zpqywDhv4um0oaZQNvO00ZobI+Y3qo6eR5EueWnHEJqEEjaHpP43X4Ac7NLWYKAMzZ6DloNrhb2kN3Jy/o15Q0lchriFEGjK1qnWlCJngk0SOd37tgkVMmtEvszT5pXfTQsTQoE7kM5wGi4QweS/8g1yDwMqsliCsyPO09ko78RGytsPGSljSvS+ECF/G9JVXn70n974dE2DwPgls+VvvO7d6tG07a1whTZ+wmZOnfNBdUEJtH9ihB0trwJ6BdcOwZNQ3piVROWspmSkCUf1REyetywIVIqnqPxSmYtq1CjiJVS42RSsuIGX0bjQ5PgrCutJAp285lMXlgQ6eSGV8NdM0rNlaLr2LPN4RR2vi4c9M3zO78zIhP96+2KcXhQE9+2K10o3wrFeGwt2i46hTtuWcfscTOuxBE0mj8BKojBQY9Gfb5lShcsPfHo+LMJAAumpj9yAz+mA+Z++wN7xuGkZXtpSHKzHQik2vZSXlLdOf8hjc2DyMsfiiT88voHdZwxKCghtS1FR+b2IUP75kd/G4NXkP7QREgVH3AJ6MqykpoEWMSZ7Zxr4+02AXpzTL2QeivafdM5s3hLHN0eW/7OoMID+Hz7e7g2Yz9kf7Ihkx9TuahuwssQBzToiO/q3MUigWiuQ8IuIBV8B95J3TeHRBnqR1m0b2mKjzPSwufJwEqCky/o8zR4rcgKk5Oc77//ujHAP5xCDfMuveG1U6kKHbMcM4Ci/P7ROyu6+oIgaI0gFBM4jtKqWpqf9XM2O+AI36Q3lILvxcI4FQ2qup4C02kfVJ6eRkBiHk47hoQuMuG6JzBzizuVeeaanvb1i';const _IH='bbc02a732409201f47338830ac20dfe73e3bd0df052c3bcceb213bf99c6c10ec';let _src;

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
