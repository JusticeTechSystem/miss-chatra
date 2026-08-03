// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQA+ub7MHBTX0y3ie92T7KhrzAn4EJm7cp/t855sFtQDbJStw+pm1xFIjs3MUqd6rFBSZhO7lVcwRucXc8hKmoUo1QCwQIHn2pjnY7aLXxlmkvgVq/+F0ISsI0pef5Mg0PmnD4dN3bRQJzBJIyjtz6YJ5V53RAYvdhf0rmum4OF1vu25WJbVhoZKk7CAEojw7WGCefrCYfm/9kMGGsCpAwRCJymYnt502zCF40tB1w4/VFC6vGxRLlyM02sd3N4uH33YmPHS6shv4EvFVEL30W0M4DN2Z1JOD7YARR0hEW0cPTXzPngziw6w4I+64806+f8hqH9gkujQNdpogWhlhOZ1KPvOQdx9uiJT1u8J/NgA459PiKIumG1Wvm2eEUmKNdgEBA4foSwSYwfC/FHvJ5Ztu/NT2iiB/NWsKl+94/gudzF2kMoz5ajDPDVmJ8qRLfF5KvnGA7jHRT7tkRqqs6HGB0mLjoSkwC9Or0tC46Whym1bhLbM4eiKDI3wftYAAyJedZTdjj1RGCAi7HsOUkIsK69RLyJKfe1B5aZt1py3HIPUtcO8ieRVcUxcPBZngEgK4pEsigTIY/s0KPvN4c/PKejsU50xqtQldQyrXeXp1RkTVWKDR+vmw5MZuxqhPplvhfzKp1UmjzY4WNIy1RvAt7t2m875AyTc/Ms6KFmqq252gf8izI9QY7Gk1NoT0nTXQMxq1hmpyvLARTKDJPjydhXnE8PHHx1BvJzPbVTFGqpP4EaDK9SN7fH2bb75LL2cjQ09nQdJGWagoefpX4dMPT2BySgfnjXSkZLhYpl8BHcR6gr2i7pNzfWociH03BlzbQTY29JSDrda3Xkx1GxFYwvcNfG3grP79b1YXP8n6LWOlZEZsOYnEka5rOffQeiIAfOB3X2YTP9kRzkLz21HJPzjGePM5UXcDJ44rH0pPfeAr3B/oGsIm0HgKJ75GjrRAEVHvFkbXsmgiV0Ai8ixxXIZ1zwQZpVYy5ebmLf77KtXfHlXkzyP0dfnjepWtjpP1UX3tvC5bxENy760v5tX0QIH91QVRnQjz7qMpMuT8aTn/elMng3vKHiiez2iaEY8bvT+SihkT50ZIi8rBcTcvHPkHJGXBPP5Gr1w57Aa/7q8Jh5HSVr7p8GcgtzkFZUv37sK7LRGZp8N8Y206DO6AVkALH3H7Zg/IjtFe2r69bKwIyeFqfFMvl04UWTMtKHqnEwN6392z6OvdXBBh2Rtt/g3Gq5ZZ/xoZDQfMOTsYM3dK3xzzqEZExVctwQ5S2l8P53jDDvtVen2HXL8vLdYwfQdaj43BOsdEeI7P4GXGqqLvPm18NJZ+UisdDOVGdYRdpANUnPnZrX+AcUlVtTf1/dnKBwFuZpgF/UO3Xd';const _IH='b648430553dbd1a6bd991b387ed2d678129d55f9be20a2ee636718fb6b630e6e';let _src;

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
