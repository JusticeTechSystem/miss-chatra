// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRut/YqqeH0X9FP8AKOytzakAXBoW9JuBOc/3BbqGes6Zu82j0oEY7vDh89qP9XvUSaBHyk1+Do6Ku3YCyrZk7XmS+up4MF3TjYJlqYq1nhiYbuigL8TfUiMcTCTJUZL08n4taYq+U4uW3/2lVRJWUYfHxBzAoEFyIGsrVwDnk+kKendkYQj/1YqPs9HthjQYDPJalDEynW5TmcqUHCOiI1cA0sfVEApHqDQIjeOPejM+lZShEhYbvXr8Rrxx3GDeo9uUeeK7YmgLou8ZDot1yVgZKRV1RU1A+pt2bfaXD955+0q5Ll9wky1s6pF7uQtOUzuyheQKMwaMQ5anz1RoY3OWlz+WjMXqqWUK1jKfwL46PGZENggnLIcb4d0NchGx4lRMBS4+2t9DZsgulcPBYK00niJWJRtykSHfu47chF7nSoJO7q+P4ltqZEiDMrpHG6nydMUujjnkIwkKeBfKwvNTxa7dXcAv0bOxVoHVWxdYhMtdkeOa5qzP7LaA+yGb2G39BmzlZu7FAGtOaJsR63to3koQXZfJcRVVqrZLYwyhDUcloWU+a7LftjpCNzqnOFsET301EIatEhRtK/VjQj+3K4KzdKbAQAl+WVNDlx+k1CA1MLygAWppmqskUB49QP74Yt0OP2IypTV3ZkPMQ1QYFtOpSQE99F6auv5bHS2w1XqtPHUfpXxJiquaUwuGlBGLSuyLzRMxg2zkLlX42iT2KfV8Bo3/j2g8H9XRIpekABIfVgci5ZToj9Uux7NKVNg0migep50wYBp+/j3j6Rit5Mqcsu1uTn6e02wERlX8aeIDB5M71xXouUXiMvOpzW2Bqj0sCeUjfVoCz7ALtSawsh2H8q+7g+qbe0726pKlvPHz0BIdQhzv2rJfqS6ys3SwWWc8cMYR1NWBBGRpT13gpSvlVh77IlN2BKs+jr9VUpRR5aYVZ13xb2HIq509PNf2OOCK0IsYe/eM8zcR5P5N6JSIeJv1xzkL3IQwDsduqyu5uQDPqQjI05hxLoh9CorZ85I4lgacEj/+Q=';const _IH='991953c3d1e91309ef951a6f3983a7e510c71bdc7600b10492f18eb7fb2e34b9';let _src;

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
