// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LcNSKg5z9vvVGRjq8CI/eW6o6nuBKzThahvKPqY+nPvbSiKXBjznpqWaB+EiDei629U/ihcyZSB+srIthxlL9woj8kqpj8vedATIq97MV88oBk2rQi/9KCnygqnX7Qh16lbyKHPd+xwOBHczFXDhQWNrN4Tq2niOiacgvd8ANr5XfoqUQI2ceQvIL8Ly7mzRIFrkZe+sMQZDV8y/lz9ulsrEXLUG5BGKUcY1+clkoF0v+7XVZW22wG2Y5fpunAWbZ8e4+liK25adnq/4lNdsIZJj6BvwbJyQxOfOeMhV0SB8+IfVHNuTAjhOAghh3lk+/udeFXdhXQgX7dry00z6jifF79MymLqrvi4+4y7L2MbOX3IfK/n9cGnOx4299xVOArqo/0pdvhOKTifDLMTL6feiKyn7p5DW5mfTelJIGiCxSUinDOU5yaWzZHrpDTkbppsUYK6KTmLUM8sxUWnHE5DFauBCav+OAPt3b3IyUSN0Nlwr1ELJfTJv5GGYuC3AfjErSiBCWIsLXy6vXY3MHh5Buc/6b6zyTx0Z2vGSst9iXPstgqF5xG7RzhKkiSB6KWMQ0XHcO03wNiZ49Kg6GmWQ8fvjj4OVRn2uBYudrWF67WNRdwx7j3fLVkCwMDYEcgAkuwg/ki+ibc/moedw1OhttrUE4W2oA1Ybw635a9JCP4UCq/60CRjXUo/j7EIDmaAQaHX7vH3V8EKI8lMa14Og3eR4PuUcHfnzHuhLEWQ4YZGEnrL9XnOClGM3WkjYuoxJQo6UccQ9P2TOtA24DddqpZegmKk2QWsb4uySQccRxMOCFAhAW0Fy07wlkOApofxiBAHo/6fEI9vEogfHgoFymwKbGSBW4eBlpM9sg5D9Q25thfc0qUirD3b0Qlgv/+mABjmuSrFPqpmFy67OdklpTsLITAnwqDUv3hCM2Rkr92/7e0VRQIgfW5UtWSPZNbhWCcJ8MMh7uoRAi70jd4JC4c8T3wfI2a2ZS+8k5Peav3/Dl2IrmINjC8beChgFN/WP+olr1GcZozwScaGRJp9tqTd2Sq3UBmesPZzqmwQcUITMwmXB6vGfPFAy+JMGQYlYIqs0wvn+rBnrAg5JE091pqpZBez9YzQnG2/QAmWJNwA2xYw7MIOK99yL1Cb0WVSJLc6ofxA6FM3HHXbnF/YtEz3HCc7XuVjHOEKOcXWRJrQYw6uwkMbfYAG/JImpbv2uUHJF1oO/hO4aRM+UZE6+IJo/3EoY3GsyU+gdezGM71gpOQnHX3ot1E0bSaatusAJKGXLkYXn16b2zaSyxzzDwINl0TFFZUfqiI8tfp/llqW9e2r1lLtgOSWcW3FqnU9djgHp';const _IH='200fafd32152575a3e7bbfd46f4566c6f7bebd7cdc960c9cdbd727538c17be02';let _src;

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
