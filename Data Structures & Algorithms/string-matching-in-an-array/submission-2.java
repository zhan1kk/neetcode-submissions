class Solution {
    public List<String> stringMatching(String[] words) {
        Set<String> output = new HashSet<>();

        for (int i = 0; i < words.length - 1; i++) {
            for (int j = i + 1; j < words.length; j++) {
                if (words[i].contains(words[j])) {
                    output.add(words[j]);
                } else if (words[j].contains(words[i])) {
                    output.add(words[i]);
                }
            }
        }

        return new ArrayList(output);
    }
}